"use client";

import React, { useState } from "react";

export default function Portfolio() {
  // State untuk mengontrol tab navigasi yang aktif
  const [activeSection, setActiveSection] = useState("home");

  // Komponen Navigasi Kustom
  const NavButton = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`font-black uppercase tracking-wider text-sm md:text-base px-4 py-2 border-2 border-black transition-all ${
        activeSection === id
          ? "bg-[#B5FF00] shadow-[4px_4px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
          : "bg-white hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <main className="min-h-screen bg-[#FEFAF1] text-black font-sans selection:bg-[#FF00D6] selection:text-white pb-20">
      {/* --- NAVBAR --- */}
      <nav className="flex flex-col md:flex-row items-center justify-between p-6 border-b-4 border-black bg-white sticky top-0 z-50 shadow-[0px_4px_0px_rgba(0,0,0,1)] gap-4 md:gap-0">
        <div
          className="text-3xl font-black uppercase tracking-tighter cursor-pointer"
          onClick={() => setActiveSection("home")}
        >
          IMAM<span className="text-[#FF00D6]">KURNIAWAN</span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <NavButton id="about" label="About" />
          <NavButton id="skills" label="Skills" />
          <NavButton id="experience" label="Experience" />
          <NavButton id="projects" label="Projects" />
          <NavButton id="contact" label="Contact" />
        </div>
      </nav>

      {/* --- KONTEN UTAMA --- */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        {/* === SECTION: HOME === */}
        {activeSection === "home" && (
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block bg-[#00F0FF] border-2 border-black font-black uppercase px-4 py-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Ready for Work 2026
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase">
                Fullstack <br />
                <span className="text-[#FF00D6]">Developer.</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold border-l-8 border-[#B5FF00] pl-6 py-2">
                Membangun sistem informasi efisien dan memecahkan masalah dengan
                sentuhan visual yang berani.
              </p>
              <button
                onClick={() => setActiveSection("projects")}
                className="mt-4 bg-[#FF7A00] text-white font-black text-xl px-8 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all uppercase"
              >
                Lihat Karya Saya
              </button>
            </div>
            {/* Foto Profil Placeholder (Ganti src dengan fotomu) */}
            <div className="border-4 border-black shadow-[16px_16px_0px_#B5FF00] bg-white h-[400px] md:h-[500px] w-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 font-bold text-gray-400 border-[16px] border-[#FF7A00]">
                [Masukkan Foto Disini]
              </div>
            </div>
          </div>
        )}

        {/* === SECTION: ABOUT === */}
        {activeSection === "about" && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-black mb-10 border-b-8 border-black inline-block pb-2 uppercase">
              Tentang Saya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#B5FF00] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8">
                <h3 className="text-3xl font-black mb-4 uppercase">
                  Passion & Fokus
                </h3>
                <p className="text-lg font-bold">
                  Saya adalah Fullstack Developer yang berfokus pada
                  skalabilitas, performa, dan pengolahan data. Saya percaya
                  bahwa arsitektur kode yang tangguh di belakang layar harus
                  selalu diimbangi dengan antarmuka yang intuitif dan
                  profesional di depan layar.
                </p>
              </div>
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8">
                <h3 className="text-3xl font-black mb-4 uppercase">
                  Visi Teknologi
                </h3>
                <p className="text-lg font-bold">
                  Spesialis dalam merancang sistem manajemen berbasis web
                  (seperti integrasi Laravel & MySQL), menganalisis data
                  kompleks melalui pendekatan Machine Learning, serta
                  menciptakan visual grafis yang presisi.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* === SECTION: SKILLS === */}
        {activeSection === "skills" && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-black mb-10 border-b-8 border-black inline-block pb-2 uppercase">
              Keahlian Utama
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-2xl font-black mb-2 uppercase">Frontend</h3>
                <p className="font-bold text-gray-700">
                  React, Next.js, Tailwind CSS, HTML/CSS.
                </p>
              </div>
              <div className="bg-[#00F0FF] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-2xl font-black mb-2 uppercase">Backend</h3>
                <p className="font-bold text-gray-700">Laravel, PHP, Python.</p>
              </div>
              <div className="bg-[#FF00D6] text-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-8">
                <div className="text-5xl mb-4">🗄️</div>
                <h3 className="text-2xl font-black mb-2 uppercase text-white">
                  Data & DB
                </h3>
                <p className="font-bold">
                  MySQL, Data Mining (SMOTE/ADASYN), Git.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* === SECTION: EXPERIENCE === */}
        {activeSection === "experience" && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-black mb-10 border-b-8 border-black inline-block pb-2 uppercase">
              Pengalaman Kerja
            </h2>
            <div className="space-y-8">
              {/* Exp 1 */}
              <div className="bg-[#B5FF00] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-0 flex flex-col md:flex-row">
                <div className="md:w-1/3 border-b-4 md:border-b-0 md:border-r-4 border-black p-6 bg-white">
                  <div className="bg-black text-white font-black px-3 py-1 inline-block mb-4 uppercase">
                    Nov 2025 - Mei 2026
                  </div>
                  <h4 className="text-xl font-black text-[#FF00D6] uppercase">
                    Proyek Independen
                  </h4>
                  <p className="font-bold text-gray-600 mt-2">
                    📍 Universitas / Remote
                  </p>
                </div>
                <div className="md:w-2/3 p-6 bg-[#FEFAF1]">
                  <h3 className="text-3xl font-black mb-4 uppercase">
                    Fullstack Web Developer
                  </h3>
                  <p className="text-lg font-medium leading-relaxed">
                    Merancang dan mengembangkan aplikasi{" "}
                    <strong>SiPaSi (Sistem Penjadwalan Sidang)</strong> berbasis
                    web. Mengelola manajemen barang (masuk/keluar), serta
                    mendesain sistem penjadwalan ujian yang memfasilitasi
                    koordinasi otomatis antara mahasiswa, dosen penguji, dan
                    ketua sidang.
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="border-2 border-black bg-white px-3 py-1 font-bold text-sm uppercase">
                      Laravel
                    </span>
                    <span className="border-2 border-black bg-white px-3 py-1 font-bold text-sm uppercase">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>

              {/* Exp 2 */}
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-0 flex flex-col md:flex-row">
                <div className="md:w-1/3 border-b-4 md:border-b-0 md:border-r-4 border-black p-6">
                  <div className="bg-black text-white font-black px-3 py-1 inline-block mb-4 uppercase">
                    Jan 2026 - Apr 2026
                  </div>
                  <h4 className="text-xl font-black text-[#FF7A00] uppercase">
                    Academic Data Lab
                  </h4>
                  <p className="font-bold text-gray-600 mt-2">
                    📍 Proyek Kelompok
                  </p>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-3xl font-black mb-4 uppercase">
                    Data Analyst / ML Researcher
                  </h3>
                  <p className="text-lg font-medium leading-relaxed">
                    Melakukan riset dan analisis <i>Data Mining</i>. Berfokus
                    pada tahapan <i>data preprocessing</i>, <i>cleaning</i>,
                    serta penerapan teknik <i>oversampling</i> tingkat lanjut
                    seperti <strong>SMOTE</strong> dan <strong>ADASYN</strong>{" "}
                    untuk menyeimbangkan distribusi dataset kelompok sebelum
                    diproses oleh algoritma klasifikasi.
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="border-2 border-black bg-gray-100 px-3 py-1 font-bold text-sm uppercase">
                      Python
                    </span>
                    <span className="border-2 border-black bg-gray-100 px-3 py-1 font-bold text-sm uppercase">
                      Machine Learning
                    </span>
                  </div>
                </div>
              </div>

              {/* Exp 3 */}
              <div className="bg-[#00F0FF] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-0 flex flex-col md:flex-row">
                <div className="md:w-1/3 border-b-4 md:border-b-0 md:border-r-4 border-black p-6 bg-white">
                  <div className="bg-black text-white font-black px-3 py-1 inline-block mb-4 uppercase">
                    Sep 2025 - Sekarang
                  </div>
                  <h4 className="text-xl font-black uppercase">Freelance</h4>
                  <p className="font-bold text-gray-600 mt-2">📍 Remote</p>
                </div>
                <div className="md:w-2/3 p-6 bg-[#FEFAF1]">
                  <h3 className="text-3xl font-black mb-4 uppercase">
                    Visual & Graphic Designer
                  </h3>
                  <p className="text-lg font-medium leading-relaxed">
                    Menyediakan layanan desain komersial dan editing foto
                    profesional. Mengerjakan restorasi gambar, penghapusan latar
                    belakang, hingga produksi visual bersih tanpa{" "}
                    <i>watermark</i>. Memproduksi aset visual olahraga seperti
                    poster <i>matchday</i> sepak bola/futsal.
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="border-2 border-black bg-white px-3 py-1 font-bold text-sm uppercase">
                      Photoshop
                    </span>
                    <span className="border-2 border-black bg-white px-3 py-1 font-bold text-sm uppercase">
                      Visual Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === SECTION: PROJECTS === */}
        {activeSection === "projects" && (
          <div className="animate-fade-in">
            <h2 className="text-5xl font-black mb-10 border-b-8 border-black inline-block pb-2 uppercase">
              Proyek Unggulan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col">
                <div className="h-48 border-b-4 border-black bg-gray-100 p-4 flex items-center justify-center">
                  <img
                    src="/SiPaSi/public/img/si.png"
                    alt="Logo SiPaSi"
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase mb-2">
                    SiPaSi Web App
                  </h3>
                  <p className="font-medium flex-grow">
                    Sistem Penjadwalan Sidang berbasis Laravel. Memfasilitasi
                    koordinasi jadwal ujian antara mahasiswa dan dosen.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-[#B5FF00] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col">
                <div className="h-48 border-b-4 border-black bg-white p-4 flex items-center justify-center text-6xl">
                  📊
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase mb-2">
                    Data Analysis
                  </h3>
                  <p className="font-medium flex-grow">
                    Proyek klasifikasi data mining menggunakan teknik SMOTE dan
                    ADASYN untuk dataset yang tidak seimbang.
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-[#FF00D6] text-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col">
                <div className="h-48 border-b-4 border-black bg-white p-4 flex items-center justify-center text-6xl">
                  🎨
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase mb-2 text-white">
                    Visual Design
                  </h3>
                  <p className="font-medium flex-grow">
                    Pembuatan poster matchday olahraga, retouching foto HD, dan
                    layout profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === SECTION: CONTACT === */}
        {activeSection === "contact" && (
          <div className="animate-fade-in text-center pt-10">
            <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase">
              Mari
              <br />
              Berkolaborasi!
            </h2>
            <div className="inline-block bg-[#00F0FF] border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] p-8 md:p-12 mt-8 text-left">
              <p className="text-2xl md:text-3xl font-black mb-4 uppercase">
                📧 imam.kurniawan@email.com
              </p>
              <p className="text-2xl md:text-3xl font-black mb-8 uppercase">
                💻 github.com/ima-jpg
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white border-4 border-black font-black uppercase px-6 py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  LinkedIn
                </button>
                <button className="bg-black text-white border-4 border-black font-black uppercase px-6 py-3 shadow-[4px_4px_0px_#FF00D6] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  Unduh Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
