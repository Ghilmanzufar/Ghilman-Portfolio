import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ArrowRight, Layers, FileText, Sparkles } from "lucide-react";

const Articles = () => {
  // Data dummy link website artikel (dapat disesuaikan saat deploy)
  const articlePortalUrl = "https://tips.ghilmanzufar.my.id";

  const featuredSeries = {
    title: "The Art of Workplace Navigation",
    subtitle: "Ilmu Mengolah & Political Skill",
    description:
      "Panduan taktis fresh graduate dan profesional muda membongkar realita organisasi: ilusi meritokrasi, komunikasi managing up yang meringankan beban atasan, taktik pembentukan impresi elegan, diplomasi pra-rapat Nemawashi, dan pertahanan dari mikromanajer.",
    modulesCount: 5,
    citationsCount: 100,
    tags: ["Political Skill", "Managing Up", "Impression Management", "Career Strategy"],
    modules: [
      { order: "01", title: "Mindset & Decoding Tempat Kerja" },
      { order: "02", title: "Managing Up & Komunikasi Taktis" },
      { order: "03", title: "Taktik Impression Management" },
      { order: "04", title: "Political Skill & Aliansi Strategis" },
      { order: "05", title: "Navigasi Krisis & Pertahanan Toksisitas" },
    ],
  };

  return (
    <section id="articles" className="relative py-24 bg-dark overflow-hidden">
      {/* Background Ambient Glow (Sesuai Gaya Desain Portofolio) */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Articles &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
          </h2>
          <div className="flex-grow h-px bg-white/10 relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
        </motion.div>

        {/* FEATURED PORTAL SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden"
        >
          {/* Subtle gradient highlight */}
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Kolom Kiri: Deskripsi & Informasi */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary-glow border border-primary/20">
                  <Sparkles size={12} />
                  Koleksi Materi Unggulan
                </span>
                <span className="text-xs font-mono text-secondary px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                  {featuredSeries.modulesCount} Modul Lengkap
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-light mb-2 group-hover:text-primary transition-colors">
                  {featuredSeries.title}
                </h3>
                <h4 className="text-sm font-semibold text-secondary">
                  {featuredSeries.subtitle}
                </h4>
              </div>

              <p className="text-gray text-sm md:text-base leading-relaxed">
                {featuredSeries.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredSeries.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-surface/80 border border-white/5 text-gray font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Link Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={articlePortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-light text-dark px-7 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 group/btn shadow-lg"
                >
                  Kunjungi Web Artikel
                  <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-xs text-gray">
                  *Portal eksternal: Ghilman | Tips and Trik
                </span>
              </div>
            </div>

            {/* Kolom Kanan: Preview Modul List */}
            <div className="lg:col-span-5 bg-surface/50 border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-semibold text-gray uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <BookOpen size={14} className="text-primary" />
                  Daftar Modul Pembahasan
                </span>
                <span className="text-secondary font-mono">{featuredSeries.citationsCount}+ Paper Riset</span>
              </div>

              <div className="space-y-2.5">
                {featuredSeries.modules.map((m) => (
                  <div
                    key={m.order}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-xs text-light"
                  >
                    <span className="font-mono text-primary font-bold">
                      {m.order}
                    </span>
                    <span className="font-medium line-clamp-1 flex-grow">
                      {m.title}
                    </span>
                    <ArrowRight size={13} className="text-gray/50 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
