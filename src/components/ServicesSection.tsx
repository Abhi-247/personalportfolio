import { motion } from "framer-motion";
import { Code, Database, Layers, Globe, Server, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive UIs with React.js, TypeScript, Tailwind CSS, and modern frameworks."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs with Node.js, Express.js, and RESTful architecture."
  },
  {
    icon: Database,
    title: "Android & IOS Development",
    description: "Developing android and IOS applications using React Native framework."
  },
  {
    icon: Layers,
    title: "Full Stack Solutions",
    description: "End-to-end MERN stack development with authentication and role-based access."
  },
  {
    icon: Globe,
    title: "Web Performance",
    description: "Optimizing applications for speed, SEO, and seamless user experience."
  },
  {
    icon: Zap,
    title: "DSA & Problem Solving",
    description: "Strong foundation in Data Structures & Algorithms with C++ and JavaScript."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
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
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:glow-accent transition-all duration-300">
                <skill.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript", "TypeScript", "React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "C++", "Python", "Git", "GitHub"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
