import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <main className="min-h-screen py-32 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-6xl font-display text-center mb-12">Contact</h1>
        <ContactForm />
        <p className="text-center mt-10 text-gray-400">contact@redoakdigital.xyz</p>
      </div>
    </main>
  )
}
