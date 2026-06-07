import React from "react";

// Komponen Ikon Sosial Neo-Brutalis (Tambahkan ikon SVG atau pustaka seperti react-icons di sini jika perlu)
const SocialIcon = ({ text }: { text: string }) => (
  <div className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer">
    <span className="text-xl font-bold">{text}</span>
  </div>
);

// Tautan Navigasi Neo-Brutalis
const NavLink = ({ text }: { text: string }) => (
  <a
    href="#"
    className="font-bold text-black hover:text-[#ff5e00] transition-colors uppercase"
  >
    {text}
  </a>
);

export default function ImamNeoBrutalistPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-black font-sans">
      {/* --- NAVBAR / HEADER --- */}
      <nav className="flex items-center justify-between p-4 px-8 border-b-2 border-black bg-white sticky top-0 z-50">
        {/* Logo/Nama Teks */}
        <div className="text-2xl font-extrabold tracking-tighter text-black uppercase">
          IMAMPORTFOLIO
        </div>

        {/* Tautan Navigasi Tengah */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink text="ABOUT" />
          <NavLink text="SKILLS" />
          <NavLink text="EXPERIENCE" />
          <NavLink text="PROJECTS" /> {/* Diganti dari Publications */}
          <NavLink text="CONTACT" />
        </div>

        {/* Tombol Resume Neo-Brutalis */}
        <button className="bg-[#ffea00] text-black font-bold px-5 py-2.5 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:bg-[#e6d200] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
          RESUME
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center p-8 md:p-16 lg:p-24 bg-[#f4f1ea]">
        {/* Sisi Kiri: Teks */}
        <div className="space-y-8">
          {/* Lencana Judul Pekerjaan */}
          <div className="inline-block bg-[#33e0ff] text-black font-bold text-sm px-4 py-1.5 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            • MAHASISWA TEKNIK / WEB DEVELOPER
          </div>

          {/* Judul Nama Besar */}
          <h1 className="text-5xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
            IMAM NURMANSYAH
          </h1>

          {/* Paragraf Bio */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            Mahasiswa Teknik & Web Developer. Memiliki minat besar pada sistem
            informasi yang efisien, analisis data mining (dengan teknik seperti
            SMOTE & ADASYN), dan merancang visual grafis profesional.
          </p>

          {/* Ikon Sosial */}
          <div className="flex space-x-4 pt-4">
            <SocialIcon text="GH" /> {/* GitHub */}
            <SocialIcon text="LI" /> {/* LinkedIn */}
            <SocialIcon text="IG" /> {/* Instagram */}
          </div>
        </div>

        {/* Sisi Kanan: Foto dan Lencana Pengalaman */}
        <div className="relative justify-self-center md:justify-self-end mt-12 md:mt-0">
          {/* Lencana Pengalaman Miring (PROYEK AKTIF) */}
          <div className="absolute top-[-15px] left-[-20px] bg-[#ffea00] text-black font-extrabold px-3.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] rotate-[-5deg] text-lg uppercase z-10">
            PROYEK AKTIF
          </div>

          {/* Bingkai Foto Neo-Brutalis */}
          <div className="border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            {/* Bingkai Oranye Tebal di Dalam */}
            <div className="border-[16px] border-[#ff5e00] bg-gray-200">
              {/* Foto Profil Kamu */}
              <img
                src="/path-ke-foto-kamu.jpg" // Ganti dengan path foto kamu di folder public
                alt="Foto Imam Nurmansyah"
                className="w-[300px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- BAGIAN LAIN BISA DITAMBAHKAN DI SINI (ABOUT, SKILLS, DLL) --- */}
    </main>
  );
}
