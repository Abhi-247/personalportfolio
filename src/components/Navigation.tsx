import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/favicon.png" alt="Logo" className="w-10 h-10 rounded-full object-cover shadow-sm border border-primary/20" />
            <span className="font-display font-bold text-xl text-foreground">Abhishek</span>
          </motion.a>

          {/* Nav Links - Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Button variant="nav" asChild>
              <a href="mailto:mrabhiverma1895@gmail.com?subject=Project%20Inquiry%20from%20Portfolio">
                Hire Me
              </a>
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
};
