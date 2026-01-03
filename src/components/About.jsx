import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const About = () => {
  // Animasi varian untuk parent (container)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda antar elemen
      },
    },
  };

  // Animasi Item: Muncul dari bawah (y: 100) ke posisi asli (y: 0)
  const itemVariants = {
    hidden: { opacity: 0, y: 100 }, // <--- Jarak start dari bawah lebih jauh
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="about" className="relative py-20 bg-dark overflow-hidden">
      
      {/* Ornamen Background (Glow Ungu Samar) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animasi jalan saat 30% elemen terlihat
          className="max-w-4xl mx-auto"
        >
          
          {/* JUDUL SECTION */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Saya</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* KONTEN UTAMA (Desain Original) */}
          <motion.div 
            variants={itemVariants} 
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            {/* Efek kilatan cahaya saat hover (tetap dipertahankan karena bagus) */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>

            <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify">
              <p>
                Halo! Saya <span className="text-white font-semibold">Ghilman Zufar</span>, mahasiswa Teknik Informatika di 
                <span className="text-primary"> Universitas Gunadarma</span> dengan IPK <span className="text-secondary font-bold">3.75</span>. 
                Saya memiliki ketertarikan mendalam pada pengembangan web modern dan teknologi kecerdasan buatan (AI).
              </p>

              <p>
                Berbekal pengalaman teknis dalam membangun aplikasi menggunakan <span className="text-white">React.js, Laravel, dan Python</span>, 
                saya senang memecahkan masalah kompleks menjadi solusi digital yang elegan. Saya juga aktif berorganisasi, 
                salah satunya sebagai tim medis di acara <span className="italic">Bluecamp</span> (LDKM), yang melatih kepemimpinan dan empati saya dalam tim.
              </p>

              <p>
                Sebagai pribadi yang ceria dan mudah beradaptasi, saya selalu antusias mempelajari teknologi baru mulai dari 
                <span className="text-secondary"> Computer Vision</span> hingga <span className="text-primary"> Algoritma AI</span>. 
                Saya percaya bahwa kombinasi <span className="text-secondary">hard skill</span> teknis dan <span className="text-primary">soft skill</span> komunikasi adalah kunci untuk menciptakan dampak nyata.
              </p>
            </div>
          </motion.div>

          {/* SOCIAL LINKS (Desain Original) */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-gray mb-6 text-sm tracking-widest uppercase">Connect with me</p>
            <div className="flex justify-center gap-6">
              {/* Github */}
              <a href="https://github.com/Ghilmanzufar" className="p-4 bg-surface rounded-full hover:bg-white hover:text-dark transition-all hover:-translate-y-2 shadow-lg">
                <Github size={24} />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ghilman-zufar/" className="p-4 bg-surface rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-2 shadow-lg">
                <Linkedin size={24} />
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/ghilmanzfr?igsh=MXd4eGx0ejJjMnk1dA%3D%3D&utm_source=qr" className="p-4 bg-surface rounded-full hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-2 shadow-lg">
                <Instagram size={24} />
              </a>
              {/* Email */}
              <a href="mailto:ghilmanzufar2004@gmail.com" className="p-4 bg-surface rounded-full hover:bg-red-500 hover:text-white transition-all hover:-translate-y-2 shadow-lg">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;