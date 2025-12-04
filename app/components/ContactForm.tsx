'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const res = await fetch('/api/contact', { method: 'POST', body: formData })
    setStatus(res.ok ? 'Message sent!' : 'Error – try again')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <input name="name" placeholder="Name" required className="w-full p-4 bg-dark/50 border border-gray-700 rounded-lg" />
      <input name="email" type="email" placeholder="Email" required className="w-full p-4 bg-dark/50 border border-gray-700 rounded-lg" />
      <textarea name="message" rows={6} placeholder="Message" required className="w-full p-4 bg-dark/50 border border-gray-700 rounded-lg" />
      <button type="submit" className="w-full bg-primary-600 hover:bg-primary-500 py-4 rounded-lg font-semibold text-lg">
        Send Message
      </button>
      {status && <p className="text-center text-lg">{status}</p>}
    </form>
  )
}
