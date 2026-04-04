import { motion } from "framer-motion";
import { Download, MessageCircle, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  FloatingStar, 
  CircleDecoration 
} from "@/components/DecorativeElements";

export const HeroSection = () => {
  const whatsappNumber = "916386840054";
  const whatsappMessage = encodeURIComponent("Hi Abhishek! I visited your portfolio and would like to discuss a project with you.");

  return (
    <section id="home" className="min-h-[90vh] pt-20 pb-8 relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <FloatingStar className="absolute top-32 right-1/4 w-4 h-4 text-accent" delay={0.5} />
      <FloatingStar className="absolute top-48 right-20 w-3 h-3 text-primary" delay={0.7} />
      <FloatingStar className="absolute bottom-32 left-20 w-5 h-5 text-accent" delay={0.9} />
      <CircleDecoration className="absolute top-1/2 left-[15%] w-3 h-3 text-muted-foreground/30" delay={1.1} />
      <CircleDecoration className="absolute top-[40%] right-[45%] w-2 h-2 text-primary/50" delay={1.3} filled />
      <FloatingStar className="absolute bottom-48 right-1/3 w-4 h-4 text-primary/70" delay={1.5} />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary">Available for Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground uppercase tracking-tight">
              ABHISHEK <span className="text-gradient">VERMA</span>
            </h1>
          </motion.div>

          {/* Role with icon */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Code2 className="w-6 h-6 text-accent" />
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer • REACT NATIVE Developer
            </p>
          </motion.div>

          {/* About Me Card */}
          <motion.div
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-border max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              B.Tech CSE student at <span className="text-primary font-semibold">REC Sonbhadra</span> with CGPA 8.26. 
              Building scalable full-stack applications with React.js, Node.js, and MongoDB. 
              Passionate about clean code and user-centric design.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="hero" asChild>
              <a href="/Abhishek%20resume.pdf" download="Abhishek_Resume.pdf">
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 text-base" asChild>
              <a href="#portfolio">View Projects</a>
            </Button>
            <Button variant="accent" asChild>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};