export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-gray-50 text-gray-900 font-sans">
      {/* --- BAGIAN HEADER / PERKENALAN --- */}
      <header className="mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Halo, Saya Imam
        </h1>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Mahasiswa Teknik & Web Developer. Saya memiliki minat besar dalam
          membangun sistem informasi yang efisien, melakukan analisis data
          mining, dan merancang visual grafis.
        </p>
      </header>

      {/* --- BAGIAN PROYEK --- */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-2">
          Proyek Unggulan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Proyek 1: Web Development (SiPaSi) */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Logo Proyek */}
            <div className="h-16 flex items-center mb-4">
              <img
                src="/SiPaSi/public/img/si.png"
                alt="Logo SiPaSi"
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">SiPaSi</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Sistem Penjadwalan Sidang berbasis web. Dibangun untuk mengelola
              jadwal ujian mahasiswa dan memfasilitasi koordinasi antara dosen
              penguji serta ketua sidang secara efisien.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                Laravel
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                Web App
              </span>
            </div>
          </div>

          {/* Card Proyek 2: Data Science */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-4 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
              📊
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Analisis Klasifikasi & SMOTE
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Proyek analisis data mining menggunakan dataset kelompok.
              Menerapkan teknik preprocessing SMOTE dan ADASYN untuk
              menyeimbangkan distribusi kelas sebelum proses klasifikasi.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Python
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                Data Mining
              </span>
            </div>
          </div>

          {/* Card Proyek 3: Graphic Design */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mb-4 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
              🎨
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Desain Grafis & Retouching
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Pembuatan material promosi visual seperti poster matchday
              olahraga, penghapusan background, dan retouching foto profesional
              tanpa watermark.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                Photoshop
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                Visual Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- BAGIAN KONTAK --- */}
      <footer className="mt-20 max-w-4xl mx-auto border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Mari Berkolaborasi</h2>
        <p className="text-gray-600 mb-4">
          Hubungi saya untuk diskusi teknis, peluang kerja, atau sekadar
          membicarakan taktik futsal dan sepak bola.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Email Saya
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
