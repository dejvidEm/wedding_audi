import { NextResponse } from 'next/server'
import Mailgun from 'mailgun.js'
import FormData from 'form-data'

export const runtime = 'nodejs' // bež na Node runtime (nie edge)

const apiKey = process.env.MAILGUN_API_KEY || ''
const domain = process.env.MAILGUN_DOMAIN || '' // napr. sandbox123.mailgun.org alebo mg.weddingaudi.sk
const from = process.env.MAILGUN_FROM || `Web Kontakt <postmaster@${domain}>`
const to = process.env.MAILGUN_TO || 'info@weddingaudi.sk'

// Bez domény nevieme poslať
if (!domain) {
  console.warn('MAILGUN_DOMAIN is missing. Set it in your environment.')
}

const mg = new Mailgun(FormData).client({
  username: 'api',
  key: apiKey,
  // Ak máš EU účet/doménu v Mailgun, odkomentuj:
  // url: 'https://api.eu.mailgun.net'
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (body._honeypot) return NextResponse.json({ ok: true })

    const {
      name,
      email,
      phone,
      venue,
      date,
      time,
      message,
    } = body || {}

    if (!email || !message) {
      return NextResponse.json({ error: 'Chýba email alebo správa' }, { status: 400 })
    }
    if (!apiKey || !domain) {
      return NextResponse.json({ error: 'Chýba MAILGUN_API_KEY alebo MAILGUN_DOMAIN' }, { status: 500 })
    }

    const subject = `Nová správa z webu${name ? ` – ${name}` : ''}`
    const text = [
      `Meno: ${name || '—'}`,
      `Email: ${email}`,
      phone ? `Telefón: ${phone}` : null,
      venue ? `Miesto svadby: ${venue}` : null,
      date ? `Dátum: ${date}` : null,
      time ? `Čas: ${time}` : null,
      '',
      'Správa:',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    await mg.messages.create(domain, {
      from,
      to: [to],
      subject,
      text,
      // Reply-To ako header
      'h:Reply-To': email,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Odoslanie zlyhalo' }, { status: 500 })
  }
}