import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Histopia</h1>
          <p className="text-xl mb-8">Pengalaman Tamagotchi Modern dengan Crypto</p>
          
          <div className="max-w-md mx-auto bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Fitur Utama</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-center">
                <span className="mr-2">🪙</span>
                <span>Integrase dengan Cryptocurrency</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎮</span>
                <span>Avatar yang dapat berkembang</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💰</span>
                <span>Sistem saldo crypto</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all">
              Mulai Bermain
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}