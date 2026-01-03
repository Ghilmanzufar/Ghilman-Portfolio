import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link Navigasi (Sesuai ID di setiap Section yang sudah kita buat)
  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  // Fungsi Scroll Halus (Smooth Scroll Manual untuk Mobile)
  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Tutup menu mobile jika terbuka
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Jarak buffer agar tidak tertutup Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* --- NAVBAR UTAMA --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 mx-auto w-[95%] md:w-[85%] max-w-5xl z-50 flex justify-center"
      >
        <div className="w-full bg-surface/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 shadow-lg flex justify-between items-center">
          
          {/* 1. LOGO (Link ke Home / Top) */}
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, "#home")}
            className="text-lg font-bold text-light tracking-wide hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
          >
            Ghilman Zufar
          </a>

          {/* 2. MENU TENGAH (Desktop) */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm text-gray hover:text-white transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* 3. TOMBOL CONTACT (Kanan) */}
          <div className="hidden md:flex items-center">
             <a 
               href="#contact"
               onClick={(e) => handleScroll(e, "#contact")}
               className="bg-light text-dark px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 group"
             >
                Contact
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>

          {/* TOMBOL HAMBURGER (Mobile) */}
          <button
            className="md:hidden text-light p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed top-28 left-0 right-0 z-40 flex justify-center px-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-4 items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)} // Auto-close & Scroll
                    className="text-gray hover:text-primary text-lg font-medium w-full text-center py-2 hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="w-full h-px bg-white/10 my-2"></div>
                
                <a 
                 href="#contact"
                 onClick={(e) => handleScroll(e, "#contact")}
                 className="bg-light text-dark px-6 py-3 rounded-full font-bold w-full text-center flex justify-center items-center gap-2 active:scale-95 transition-transform"
               >
                  Contact Me <ArrowRight size={18}/>
               </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;