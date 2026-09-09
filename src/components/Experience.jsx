import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar, Laptop } from "lucide-react";

const Experience = () => {
  // Data Timeline
  const timelineData = [
    {
      id: 1,
      type: "work",
      title: "PT Sugity Creatives",
      role: "Computer Vision & Full Stack Engineer Intern",
      date: "Mei 2026 - Agu 2026",
      description: "Mengembangkan Industrial AI Camera Inspection System. Melatih model custom YOLOv8 untuk deteksi cacat visual komponen manufaktur dan membangun Operator & Admin Dashboard real-time (React.js, FastAPI, SSE) yang terintegrasi langsung ke sistem portal manufaktur perusahaan.",
      icon: Briefcase,
    },
    {
      id: 2,
      type: "work",
      title: "Kelurahan Klender (Project)",
      role: "Full Stack Developer",
      date: "2025",
      description: "Mengembangkan 'SiPentas', sistem digitalisasi pelayanan pertanahan. Mengintegrasikan AI Chatbot (Llama-3 + RAG) untuk layanan warga 24/7 dan sistem Booking Antrean Online dengan notifikasi Email otomatis.",
      icon: Laptop,
    },
    {
      id: 3,
      type: "education",
      title: "Universitas Gunadarma",
      role: "S1 Teknik Informatika",
      date: "2022 - 2026",
      description: "Lulusan S1 Informatika dengan IPK 3.76. Berfokus mendalami Software Engineering, Web Development, dan implementasi Machine Learning / Artificial Intelligence.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-dark overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <div className="flex-grow h-px bg-white/10 relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Garis Vertikal Tengah (Glow) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 transform md:-translate-x-1/2">
             <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-primary opacity-50 blur-sm"></div>
          </div>

          {/* LIST ITEM */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                // Layout: Mobile (Kiri rata), Desktop (Zig-zag)
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* 1. KONTEN (Card) */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className={`glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group relative ${
                     index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {/* Badge Tanggal */}
                    <div className={`inline-flex items-center gap-2 text-xs font-mono text-secondary mb-2 px-3 py-1 bg-secondary/10 rounded-full ${
                        index % 2 === 0 ? "self-start" : "md:self-end" 
                    }`}>
                      <Calendar size={12} />
                      {item.date}
                    </div>

                    <h3 className="text-xl font-bold text-light mt-2 group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-gray-400 font-medium text-sm mb-3">
                      @ {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* 2. TITIK TENGAH (Connector) */}
                <div className="absolute left-[9px] md:left-1/2 top-0 md:top-1/2 w-6 h-6 bg-dark border-2 border-primary rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* 3. ICON BESAR (Hiasan Background) */}
                <div className={`hidden md:flex w-[45%] justify-center items-center opacity-20 hover:opacity-100 transition-opacity duration-500 ${
                   index % 2 === 0 ? "justify-end" : "justify-start"
                }`}>
                   <item.icon size={120} className="text-primary" />
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;