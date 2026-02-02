import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Development Team Member",
    company: "REC Sonbhadra",
    location: "Sonbhadra, UP",
    period: "Sep 2024 – Present",
    description: [
      "Developed the official college website using React.js, Node.js, and MongoDB",
      "Implemented robust authentication, role-based access control, and dynamic modules for departments, faculty, events, and notices",
      "Ensured a scalable and maintainable codebase for ongoing institutional needs",
    ],
    current: true,
  },
  {
    title: "Frontend Developer Intern",
    company: "Coadal Technologies Pvt. Ltd.,Jaipur",
    location: "Remote",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Built responsive web applications using React.js and Tailwind CSS",
      "Integrated REST APIs with backend services using Node.js and Express.js",
      "Collaborated with cross-functional teams to deliver projects on time",
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
                exp.current ? 'bg-accent glow-accent' : 'bg-primary'
              }`} />

              {/* Content Card */}
              <div className="bg-background rounded-2xl p-6 border border-border shadow-lg hover:border-primary/50 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.current && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Currently Working
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
