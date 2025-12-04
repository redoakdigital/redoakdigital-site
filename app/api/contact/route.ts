import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  try {
    await resend.emails.send({
      from: 'contact@redoakdigital.xyz',
      to: 'contact@redoakdigital.xyz',
      subject: `New message from ${name}`,
      text: `From: ${email}\n\n${message}`
    })
    return new Response('OK', { status: 200 })
  } catch (e) {
    return new Response('Error', { status: 500 })
  }
}
