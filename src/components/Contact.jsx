import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Linkedin, Instagram, Phone, Github, Loader2 } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- KONFIGURASI EMAILJS ---
    // Ganti string di bawah ini dengan ID dari dashboard EmailJS Anda nanti
    const SERVICE_ID = "service_orwf80r";
    const TEMPLATE_ID = "template_x52dmx1";
    const PUBLIC_KEY = "nMMws74M-AJjhgHZK";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          alert("Pesan berhasil terkirim! Saya akan segera membalasnya.");
          formRef.current.reset(); // Kosongkan form setelah kirim
        },
        (error) => {
          setIsSending(false);
          console.error("FAILED...", error.text);
          alert("Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp/LinkedIn.");
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 bg-dark overflow-hidden">
      
      {/* Background Gradient Footer */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* === BAGIAN ATAS: KONTAK & FORM === */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          
          {/* 1. TEKS AJAKAN (Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">together.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Punya ide projek menarik atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi baru.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-surface rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray">Mail me at</p>
                  <p className="text-light font-medium group-hover:text-primary transition-colors">ghilmanzufar2004@gmail.com</p>
                </div>
              </div>
              
              {/* Lokasi */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-surface rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray">Based in</p>
                  <p className="text-light font-medium">Bekasi, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. FORMULIR (Kanan) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>

            {/* Form Tag dimulai di sini */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm text-gray mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="user_name" // Name attribute penting untuk EmailJS
                  required
                  placeholder="John Doe" 
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray mb-2">Pesan</label>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  placeholder="Ceritakan tentang projek Anda..." 
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>Mengirim... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Kirim Pesan <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>

        {/* === GARIS PEMISAH === */}
        <div className="w-full h-px bg-white/10 mb-12"></div>

        {/* === FOOTER BAGIAN BAWAH === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray text-sm">
            © 2026 <span className="text-white font-semibold">Ghilman Zufar</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Ghilmanzufar" target="_blank" className="text-gray hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
               <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ghilman-zufar" target="_blank" className="text-gray hover:text-[#0077b5] transition-colors hover:-translate-y-1 transform duration-300">
               <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray hover:text-pink-600 transition-colors hover:-translate-y-1 transform duration-300">
               <Instagram size={20} />
            </a>
            <a href="mailto:ghilmanzufar2004@gmail.com" className="text-gray hover:text-red-500 transition-colors hover:-translate-y-1 transform duration-300">
               <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;