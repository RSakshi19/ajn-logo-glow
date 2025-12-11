import logo from "@/assets/logo.png";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      {/* Main footer */}
      <div className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full"></div>
                  <img
                    src={logo}
                    alt="AAYOJAN Ai"
                    className="relative h-14 w-auto"
                  />
                </div>
              </div>
              <p className="text-accent font-semibold text-lg mb-3">
                Techno - Sankalp to Siddhi
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                Transforming technological aspirations into reality through innovation, excellence, and trusted partnerships.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 text-accent" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@aayojanai.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>info@aayojanai.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>+91 XXX XXX XXXX</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} AAYOJAN AI. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with <span className="text-accent">❤</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;