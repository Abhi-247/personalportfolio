import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ieee from "../assets/images/ieee.png";
import alumni from "../assets/images/alumni.png";
import disaster from "../assets/images/disaster.png";
import todo from "../assets/images/todo.png";


const projects = [
  {
    title: "IEEE CNC 2025 Conference Website",
    category: "React.js, Tailwind CSS",
    description: "Official conference website with responsive components for homepage, committee info, event schedules, and registration.",
    image: ieee,
    liveLink: "https://cncrecs.in",
    githubLink: "https://github.com/Abhi-247",
  },
  {
    title: "Notes App",
    category: "Android, React Native",
    description: "A simple notes application with CRUD operations and local storage persistence.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    liveLink: "#",
    githubLink: "https://github.com/Abhi-247/NotesApp",
  },
  {
    title: "Alumni Portal for College",
    category: "MERN Stack",
    description: "Full-stack alumni portal connecting students and alumni for mentorship, networking, and job opportunities with recruiter section.",
    image: alumni,
    liveLink: "https://alumni-portal-coral.vercel.app",
    githubLink: "https://github.com/Abhi-247/Alumni-portal",
  },
  {
    title: "Disaster Management System",
    category: "html, CSS, JavaScript, Node.js",
    description: "Web application to report and manage disaster incidents with real-time updates and resource allocation.",
    image: disaster,
    liveLink: "https://disaster-management-system-abhi.vercel.app/",
    githubLink: "https://github.com/Abhi-247/Disaster-Management-System",
  },
  {
    title: "Currency Converter App",
    category: "html, CSS, JavaScript, Node.js",
    description: "Web application to convert currencies with real-time exchange rates and responsive design.",
    image: "https://www.sourcecodester.com/sites/default/files/images/rems/rtcc1.png",
    liveLink: "#",
    githubLink: "https://github.com/Abhi-247/Currency-Converter",
  },
  {
    title: "Todo List App",
    category: "html, CSS, JavaScript, Node.js",
    description: "Web application to manage tasks with add, edit, delete, and mark as complete functionality.",
    image: todo,
    liveLink: "#",
    githubLink: "https://github.com/Abhi-247/Todo-List",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-display font-bold text-foreground mt-1.5 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1.5 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Links */}
                <div className="flex items-center gap-4 mt-3">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
