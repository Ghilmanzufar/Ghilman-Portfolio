import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const Articles = () => {
  // URL dummy portal artikel (akan diarahkan ke domain resmi saat deploy)
  const articlePortalUrl = "https://tips.ghilmanzufar.my.id";

  return (
    <section id="articles" className="relative py-20 bg-dark overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Articles &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
          </h2>
          <div className="flex-grow h-px bg-white/10 relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
        </motion.div>

        {/* SIMPLE CALLOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Subtle Glow Hover */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-glow mb-6 shadow-sm group-hover:scale-110 transition-transform">
            <BookOpen size={26} />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-light mb-3">
            Kunjungi Portal Tips dan Trik
          </h3>

          <p className="text-gray text-sm md:text-base max-w-xl leading-relaxed mb-8">
            Kumpulan artikel, tips taktis, dan rangkuman wawasan praktis seputar dunia kerja, teknologi, serta pengembangan diri yang saya tulis secara berkala.
          </p>

          <a
            href={articlePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-light text-dark px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg group/btn"
          >
            Buka Website Artikel
            <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
