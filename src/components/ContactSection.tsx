import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const whatsappNumber = "916386840054";
  const whatsappMessage = encodeURIComponent("Hi Abhishek! I visited your portfolio and would like to discuss a project with you.");
  const email = "mrabhiverma1895@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-lg">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">
                    {email}
                  </p>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  title="Copy email address"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    +91 6386840054
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Sitapur, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <a href={`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`}>
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" onClick={copyEmailToClipboard}>
                {emailCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {emailCopied ? "Copied!" : "Copy Email"}
              </Button>
              <Button variant="accent" asChild>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Quick Contact Card */}
          <motion.div
            className="bg-background rounded-2xl p-8 shadow-lg border border-border flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Send me an email or copy my address to reach out. I typically respond within 24 hours and would love to hear about your project ideas!
              </p>
              <div className="flex flex-col gap-3 items-center">
                <Button variant="hero" size="lg" className="w-full max-w-xs" asChild>
                  <a href={`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio&body=Hi%20Abhishek,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Details:%0A`}>
                    <Send className="w-5 h-5" />
                    Send Message
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full max-w-xs"
                  onClick={copyEmailToClipboard}
                >
                  {emailCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {emailCopied ? "Email Copied!" : "Copy Email Address"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                Or reach out via WhatsApp for a quicker response
              </p>
              <Button variant="outline" className="rounded-full" asChild>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};