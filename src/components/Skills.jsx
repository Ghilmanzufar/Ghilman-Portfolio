import { motion } from "framer-motion";

const Skills = () => {
  // Data Skills Lengkap
  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Roboflow", icon: "https://avatars.githubusercontent.com/u/53379296?s=200&v=4" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  ];

  // Membagi Skills menjadi 2 Baris (Setengah-setengah)
  const halfLength = Math.ceil(skills.length / 2);
  const topSkills = skills.slice(0, halfLength);    // Baris 1: JS s/d MySQL
  const bottomSkills = skills.slice(halfLength);    // Baris 2: Postgres s/d Canva

  // Fungsi untuk render baris skill agar kodingan lebih rapi
  // direction: 1 (ke kiri), -1 (ke kanan)
  const SkillRow = ({ items, direction }) => {
    // Duplikasi array agar looping mulus
    const duplicatedItems = [...items, ...items];

    return (
      <div className="relative w-full overflow-hidden py-4">
        {/* Track Bergerak */}
        <motion.div
          className="flex w-max space-x-8 md:space-x-12"
          // Logika arah gerak: Jika direction 1 (Kiri), x dari 0 ke -50%. Jika -1 (Kanan), dari -50% ke 0.
          animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Durasi 30 detik (sedikit lebih cepat biar gak nunggu lama)
          }}
        >
          {duplicatedItems.map((skill, index) => {
            // Random floating effect per item
            const randomDuration = Math.random() * (5 - 3) + 3;
            const randomDelay = Math.random() * 2;

            return (
              <motion.div
                key={index}
                // Efek Balon Naik Turun
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  duration: randomDuration,
                  delay: randomDelay,
                }}
                className="relative group pt-6" // pt-6 memberi ruang untuk efek hover balon naik
              >
                {/* Card Lingkaran */}
                <div className="flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 p-4 bg-surface/30 backdrop-blur-md border border-white/5 rounded-full hover:bg-surface/50 hover:border-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-lg"
                  />
                  {/* Nama Skill */}
                  <span className="absolute -bottom-6 text-xs font-medium text-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-dark/80 px-2 py-1 rounded">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-24 bg-dark overflow-hidden">
      
      {/* Background Gradient Samar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stack</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Beragam teknologi yang saya kuasai untuk menjawab setiap tantangan.
          </p>
        </motion.div>
      </div>

      {/* CONTAINER MARQUEE */}
      <div className="space-y-4">
        {/* Masking Gradient di Kiri-Kanan (Agar item muncul/hilang halus) */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

        {/* Baris 1: Jalan ke Kiri */}
        <SkillRow items={topSkills} direction={1} />
        
        {/* Baris 2: Jalan ke Kanan (Sebaliknya) */}
        <SkillRow items={bottomSkills} direction={-1} />
      </div>

    </section>
  );
};

export default Skills;