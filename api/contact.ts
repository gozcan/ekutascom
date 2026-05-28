import nodemailer from 'nodemailer';

/**
 * Vercel Serverless Function — POST /api/contact
 *
 * Body (JSON): { name, email, phone?, subject, message }
 *
 * Gerekli Environment Variables (Vercel → Project Settings → Environment Variables):
 *   SMTP_HOST      → mail.eksioglugrup.tr
 *   SMTP_PORT      → 465              (SSL) ya da 587 (STARTTLS)
 *   SMTP_SECURE    → "true"           (465 için true, 587 için false)
 *   SMTP_USER      → info@ekutas.com
 *   SMTP_PASS      → <e-posta hesabının şifresi>
 *   MAIL_TO        → info@ekutas.com  (alıcı; birden fazla için virgülle ayır)
 *   MAIL_FROM      → "Ekutaş Web <info@ekutas.com>"  (opsiyonel; yoksa SMTP_USER)
 */

// Vercel Node.js runtime
export const config = {
  runtime: 'nodejs',
};

type Req = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  on?: (event: string, cb: (chunk?: unknown) => void) => void;
};
type Res = {
  status: (code: number) => Res;
  setHeader: (name: string, value: string) => void;
  json: (data: unknown) => void;
  end: (data?: unknown) => void;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function readBody(req: Req): Promise<Record<string, unknown>> {
  // Vercel genelde body'yi parse eder; fallback olarak stream'i de okuyalım.
  if (req.body && typeof req.body === 'object') {
    return req.body as Record<string, unknown>;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  if (typeof req.on === 'function') {
    return await new Promise((resolve) => {
      let raw = '';
      req.on!('data', (chunk: unknown) => {
        raw += String(chunk);
      });
      req.on!('end', () => {
        try {
          resolve(raw ? JSON.parse(raw) : {});
        } catch {
          resolve({});
        }
      });
    });
  }
  return {};
}

export default async function handler(req: Req, res: Res) {
  // CORS (aynı origin'den çağrılacak ama yine de güvenli olsun)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const body = await readBody(req);

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const subject = String(body.subject ?? '').trim();
    const message = String(body.message ?? '').trim();
    const company = String((body as { company?: unknown }).company ?? ''); // honeypot

    // Honeypot — bot tarafından doldurulursa sessizce başarılı dön
    if (company) {
      res.status(200).json({ ok: true });
      return;
    }

    if (!name || !email || !subject || !message) {
      res
        .status(400)
        .json({ ok: false, error: 'Lütfen zorunlu alanları doldurun.' });
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      res
        .status(400)
        .json({ ok: false, error: 'Geçerli bir e-posta adresi girin.' });
      return;
    }

    // Uzunluk sınırları (basit kötüye kullanım koruması)
    if (name.length > 200 || subject.length > 250 || message.length > 5000) {
      res.status(400).json({ ok: false, error: 'Çok uzun içerik.' });
      return;
    }

    const host = process.env.SMTP_HOST || 'mail.eksioglugrup.tr';
    const port = Number(process.env.SMTP_PORT || 465);
    const secure =
      String(process.env.SMTP_SECURE ?? (port === 465 ? 'true' : 'false')) ===
      'true';
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.MAIL_TO || user || 'info@ekutas.com';
    const from = process.env.MAIL_FROM || (user ? `Ekutaş Web <${user}>` : '');

    if (!user || !pass) {
      console.error('[contact] SMTP credentials missing');
      res.status(500).json({
        ok: false,
        error: 'Sunucu yapılandırması eksik. Lütfen daha sonra tekrar deneyin.',
      });
      return;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || '-'),
      subject: escapeHtml(subject),
      message: escapeHtml(message).replace(/\n/g, '<br />'),
    };

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;max-width:640px;">
        <h2 style="color:#b45309;margin:0 0 12px;">Web Sitesi İletişim Formu</h2>
        <p style="margin:0 0 16px;color:#475569;">ekutas.com iletişim sayfası üzerinden yeni bir mesaj alındı.</p>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;font-size:14px;">
          <tr><td style="background:#f8fafc;width:140px;border:1px solid #e2e8f0;"><strong>Ad Soyad</strong></td><td style="border:1px solid #e2e8f0;">${safe.name}</td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e2e8f0;"><strong>E-posta</strong></td><td style="border:1px solid #e2e8f0;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e2e8f0;"><strong>Telefon</strong></td><td style="border:1px solid #e2e8f0;">${safe.phone}</td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e2e8f0;"><strong>Konu</strong></td><td style="border:1px solid #e2e8f0;">${safe.subject}</td></tr>
          <tr><td style="background:#f8fafc;border:1px solid #e2e8f0;vertical-align:top;"><strong>Mesaj</strong></td><td style="border:1px solid #e2e8f0;">${safe.message}</td></tr>
        </table>
        <p style="margin-top:16px;color:#64748b;font-size:12px;">Bu mesaj otomatik olarak gönderildi.</p>
      </div>
    `.trim();

    const text =
      `Web Sitesi İletişim Formu\n\n` +
      `Ad Soyad : ${name}\n` +
      `E-posta  : ${email}\n` +
      `Telefon  : ${phone || '-'}\n` +
      `Konu     : ${subject}\n\n` +
      `Mesaj:\n${message}\n`;

    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `[İletişim Formu] ${subject}`,
      text,
      html,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] sendMail error:', err);
    res
      .status(500)
      .json({ ok: false, error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' });
  }
}
