import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

// --- IMPORT FOTO PROFIL ---
// Pastikan nama file di folder src/assets/ adalah profile.png (atau sesuaikan ekstensinya)
import profilePic from "../assets/profile.png"; 

const Hero = () => {
  const [init, setInit] = useState(false);

  // 1. Inisialisasi Particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. Konfigurasi Particles (Neural Network Effect)
  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 150, links: { opacity: 1 } },
      },
    },
    particles: {
      color: { value: "#8B5CF6" }, // Warna Primary (Ungu)
      links: {
        color: "#06b6d4", // Warna Secondary (Cyan)
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // 3. Variabel Animasi
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      
      {/* BACKGROUND PARTIKEL */}
      {init && (
        <div className="absolute inset-0 -z-10">
          <Particles id="tsparticles" options={particlesOptions} />
        </div>
      )}

      {/* KONTEN UTAMA */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* KOLOM KIRI: Teks */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left space-y-6"
        >
          {/* Badge Status */}
          <motion.div variants={textVariants} className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary-glow text-sm font-semibold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to Work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-pulse-slow">
              Ghilman Zufar
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2 variants={textVariants} className="text-xl md:text-2xl text-gray font-light">
            Web Developer • <span className="text-light font-medium">AI Engineer</span> • Tech Enthusiast
          </motion.h2>

          {/* Deskripsi */}
          <motion.p variants={textVariants} className="text-gray max-w-lg mx-auto md:mx-0 leading-relaxed">
            Menciptakan solusi digital yang cerdas dan estetis. Menggabungkan
            <span className="text-secondary"> performa kode</span> dengan kecanggihan
            <span className="text-primary"> Artificial Intelligence</span>.
          </motion.p>

          {/* Tombol CTA */}
            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#projects" className="px-8 py-3 bg-primary hover:bg-violet-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] flex items-center justify-center gap-2">
                Lihat Projek <ArrowRight size={20} />
              </a>
              
              {/* TOMBOL DOWNLOAD CV YANG SUDAH DIPERBAIKI */}
              {/* href="/CV_Ghilman_Zufar.pdf" mengacu ke file di folder public */}
              <a 
                href="public/CV_GhilmanZufar.pdf" 
                download="CV_GhilmanZufar.pdf" // Atribut ini memaksa browser mendownload file, bukan membukanya
                className="px-8 py-3 border border-white/20 hover:border-white/50 hover:bg-white/5 text-light font-medium rounded-full transition-all flex items-center justify-center gap-2 group"
              >
                Download CV <Download size={20} className="group-hover:translate-y-1 transition-transform"/>
              </a>
            </motion.div>
        </motion.div>

        {/* KOLOM KANAN: Foto Profil */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          // REVISI: Hapus 'hidden', tambah 'mt-10' biar ada jarak di HP
          className="relative flex justify-center mt-12 md:mt-0"
        >
          {/* Efek Glow Belakang (Responsive Ukuran) */}
          <div className="absolute w-[250px] h-[320px] md:w-[350px] md:h-[450px] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
          
          {/* Frame Glassmorphism (Responsive Ukuran) */}
          {/* w-[280px] h-[360px] untuk HP, md:... untuk Desktop */}
          <div className="w-[280px] h-[360px] md:w-[350px] md:h-[450px] glass rounded-2xl p-3 relative group overflow-hidden border border-white/10">
            
            {/* Inner Container untuk Gambar */}
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-surface">
              <img 
                src={profilePic} 
                alt="Ghilman Zufar" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-dark/80 to-transparent"></div>
            </div>

            {/* Aksen Garis Tech */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#06b6d4]"></div>
            <div className="absolute bottom-4 left-4 w-12 h-1 bg-primary/50 rounded-full"></div>

          </div>
        </motion.div>
      </div>

      {/* === MARQUEE SECTION (Fixed Design) === */}
      
      {/* 1. LAYER BELAKANG (Kotak Warna) */}
      <div className="absolute -bottom-2 left-0 w-[110%] -ml-[5%] transform -rotate-1 h-24 bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-70 blur-sm z-10"></div>
      
      {/* 2. LAYER DEPAN (Teks Berjalan) */}
      <div className="absolute bottom-4 left-0 w-[110%] -ml-[5%] transform -rotate-2 bg-dark/90 border-y border-white/20 py-4 overflow-hidden z-20 shadow-2xl backdrop-blur-sm">
        <motion.div 
          className="flex whitespace-nowrap gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10 text-2xl md:text-3xl font-bold text-white uppercase tracking-widest items-center">
              <span>Developer</span> <span className="text-primary text-xl">★</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI Engineer</span> <span className="text-secondary text-xl">★</span>
              <span>Problem Solver</span> <span className="text-primary text-xl">★</span>
              <span>Full Stack</span> <span className="text-secondary text-xl">★</span>
              <span>Tech Enthusiast</span> <span className="text-primary text-xl">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;