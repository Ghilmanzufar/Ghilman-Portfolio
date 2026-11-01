import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Internship Completion Certificate – Computer Vision & Software Engineering",
      issuer: "PT. Sugity Creatives",
      date: "Agu 2026",
      credentialId: "0986.400/SC/HC/VIII/2026",
      link: null,
      tag: "Computer Vision & AI",
    },
    {
      id: 2,
      title: "Mastery Deep Learning (Fresh Graduate Academy)",
      issuer: "Digital Talent Scholarship (Kominfo)",
      date: "Sep 2025",
      credentialId: "19511141840-275",
      link: "https://digitalent.kominfo.go.id/cek-sertifikat",
      tag: "Deep Learning",
    },
    {
      id: 3,
      title: "Intermediate Deep Learning (Fresh Graduate Academy)",
      issuer: "Digital Talent Scholarship (Kominfo)",
      date: "Sep 2025",
      credentialId: "19511112840-230",
      link: "https://digitalent.kominfo.go.id/cek-sertifikat",
      tag: "Deep Learning",
    },
    {
      id: 4,
      title: "Fundamental Deep Learning (Fresh Graduate Academy)",
      issuer: "Digital Talent Scholarship (Kominfo)",
      date: "Agu 2025",
      credentialId: "19510954840-453",
      link: "https://digitalent.kominfo.go.id/cek-sertifikat",
      tag: "Deep Learning",
    },
    {
      id: 5,
      title: "Bootcamp Smart Sprint",
      issuer: "Google Developer Group on Campus - Univ. Gunadarma",
      date: "Mar 2025",
      credentialId: "BSS180325P61",
      link: "https://gdgocug.id/certificates/BSS180325P61",
      tag: "Full Stack Web",
    },
    {
      id: 6,
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      issuer: "Dicoding Indonesia",
      date: "Nov 2024 - Nov 2027",
      credentialId: "L4PQEY844PO1",
      link: "https://www.dicoding.com/certificates/L4PQEY844PO1",
      tag: "Cloud Computing",
    },
    {
      id: 7,
      title: "EF SET English Certificate 57/100 (B2 Upper Intermediate)",
      issuer: "EF SET",
      date: "Okt 2026 - Jun 2027",
      credentialId: null,
      link: "https://cert.efset.org/en/wvydDT",
      tag: "Language",
    },
    {
      id: 8,
      title: "Building the Foundation of Web Development",
      issuer: "Rakamin Academy",
      date: "2024",
      credentialId: null,
      link: "https://drive.google.com/file/d/1mMm2MT6Z0vV_nlOYPeTzfp8lZuDuVLtZ/view?usp=drive_link",
      tag: "Web Development",
    },
    {
      id: 9,
      title: "Oracle for Intermediate",
      issuer: "Universitas Gunadarma",
      date: "Agu 2025",
      credentialId: "093156",
      link: null,
      tag: "Database & SQL",
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-dark overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] -z-10"></div>

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
            Licenses &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span>
          </h2>
          <div className="flex-grow h-px bg-white/10 relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
        </motion.div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Top Badge: Date & Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-secondary px-2.5 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                    <Calendar size={11} />
                    {cert.date}
                  </div>
                  <span className="text-[11px] font-semibold text-gray/80 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5">
                    {cert.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-light group-hover:text-primary transition-colors leading-snug mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-gray font-medium mb-3">
                  {cert.issuer}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-gray/70 mb-4 bg-surface/50 px-2.5 py-1 rounded-md border border-white/5 inline-block">
                    ID: <span className="text-light/90 font-semibold">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action / Show Credential Link */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary-glow hover:text-white transition-colors group/link"
                  >
                    <span>Show Credential</span>
                    <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-gray/60 font-medium">
                    <ShieldCheck size={13} className="text-secondary/70" />
                    Verified Certificate
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
