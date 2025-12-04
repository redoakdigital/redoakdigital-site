import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-32 text-center px-6">
        <h2 className="text-5xl font-display mb-8">Propelling Innovation Forward</h2>
        <p className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
          Red Oak Digital is a technology research firm that believes in supporting the development of innovative companies and projects to propel the modern world forward.
        </p>
      </section>
    </>
  )
}
