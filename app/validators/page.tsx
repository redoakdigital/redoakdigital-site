export default function Validators() {
  return (
    <main className="min-h-screen py-32 px-6 max-w-4xl mx-auto text-center">
      <h1 className="text-6xl font-display mb-12">Validators & Infrastructure</h1>
      <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
        <div className="bg-dark/50 border border-primary-900/40 rounded-xl p-10">
          <h3 className="text-3xl font-display text-primary-500">Jito</h3>
          <p className="text-gray-400 mt-4">High-performance Solana staking</p>
        </div>
        <div className="bg-dark/50 border border-primary-900/40 rounded-xl p-10">
          <h3 className="text-3xl font-display text-primary-500">Helius</h3>
          <p className="text-gray-400 mt-4">Enterprise-grade RPC infrastructure</p>
        </div>
      </div>
    </main>
  )
}
