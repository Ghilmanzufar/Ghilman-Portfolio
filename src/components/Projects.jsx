import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import sipentas1 from "../assets/kelurahan.jpg";
import sipentas2 from "../assets/kelurahan1.jpg";
import sipentas3 from "../assets/kelurahan2.jpg";
import sipentas4 from "../assets/kelurahan3.jpg";
import sipentas5 from "../assets/kelurahan4.jpg";
import fruity from "../assets/fruity.jpg";
import fruity2 from "../assets/fruity2.jpg";
import fruity3 from "../assets/fruity3.jpg";
import fruity4 from "../assets/fruity4.jpg";




// --- KOMPONEN CAROUSEL (Slider Gambar) ---
const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  // Fungsi Prev Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-surface/30 group">
      
      {/* 1. GAMBAR (Dengan Transisi) */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex} // Kunci ini penting agar animasi jalan saat index berubah
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Overlay Gelap saat hover agar tombol lebih jelas */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* 2. TOMBOL NAVIGASI (Hanya muncul jika gambar > 1) */}
      {images.length > 1 && (
        <>
          {/* Tombol Kiri */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark/50 text-white backdrop-blur-sm border border-white/10 hover:bg-primary transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Tombol Kanan */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark/50 text-white backdrop-blur-sm border border-white/10 hover:bg-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indikator Titik (Dots) di Bawah */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-primary w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- KOMPONEN UTAMA PROJECTS ---
const Projects = () => {
  // Data Projects (Updated dengan Array 'images')
  const projects = [
    {
      id: 1,
      title: "SiPentas (Pelayanan Pertanahan)",
      category: "GovTech & AI Integration",
      description: "Sistem transformasi digital untuk Kelurahan Klender. Mengintegrasikan Chatbot Cerdas (Groq Llama-3 + RAG) untuk menjawab pertanyaan warga otomatis, serta fitur booking antrean online.",
      // Ganti string 'image' jadi array 'images'
      images: [
        sipentas1, sipentas2, sipentas3, sipentas4, sipentas5  // Fitur Antrean
      ],
      tech: ["Laravel", "Tailwind", "Python", "Llama-3 (AI)", "RAG"],
      demoLink: "#",
      repoLink: "https://github.com/Ghilmanzufar",
    },
    {
      id: 2,
      title: "AI Smart Kitchen Assistant",
      category: "Computer Vision & Gen-AI",
      description: "Aplikasi cerdas yang menggabungkan 'Mata' (Computer Vision) dan 'Otak' (Gen-AI). Mendeteksi bahan makanan secara real-time dan memberikan rekomendasi resep.",
      images: [
        fruity, fruity2, fruity3, fruity4  // Recipe Result
      ],
      tech: ["Python", "YOLOv8", "Roboflow", "Laravel", "Tailwind"],
      demoLink: "#",
      repoLink: "https://github.com/Ghilmanzufar",
    },
    {
      id: 3,
      title: "MotoFix Booking System",
      category: "Web Application",
      description: "Platform reservasi bengkel motor untuk mengurai antrean fisik. Memungkinkan pelanggan memilih jadwal servis dan memantau status perbaikan.",
      images: [
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop", // Booking Form
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"  // Admin Panel
      ],
      tech: ["React.js", "Express.js", "MySQL", "Node.js"],
      demoLink: "#",
      repoLink: "https://github.com/Ghilmanzufar",
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-dark overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Implementasi nyata dari solusi berbasis Web Modern dan Artificial Intelligence.
          </p>
        </motion.div>

        {/* LIST PROJECT */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* IMAGE CAROUSEL SECTION (Updated) */}
              <div className="w-full md:w-1/2">
                 <ProjectCarousel images={project.images} title={project.title} />
                 
                 {/* Hiasan Dekoratif di belakang gambar */}
                 <div className={`hidden md:block absolute w-[45%] h-[400px] border-2 border-primary/30 rounded-2xl -z-10 transition-transform duration-500 translate-x-4 translate-y-4 ${index % 2 === 1 ? "left-0 -translate-x-4" : ""}`}></div>
              </div>

              {/* TEXT SECTION */}
              <div className="w-full md:w-1/2 space-y-6">
                
                {/* Category Badge */}
                <span className="text-secondary text-sm font-bold tracking-widest uppercase">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold text-light group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a href={project.demoLink} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-violet-700 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                    Live Demo <ExternalLink size={18} />
                  </a>
                  <a href={project.repoLink} className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 hover:border-white transition-all">
                    Source Code <Github size={18} />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* MORE PROJECTS BUTTON */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-24"
        >
          <a href="https://github.com/ghilmanzufar" target="_blank" className="inline-flex items-center gap-2 text-gray hover:text-secondary transition-colors border-b border-transparent hover:border-secondary pb-1 group">
            Lihat projek lainnya di GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;