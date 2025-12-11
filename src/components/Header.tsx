import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-dark shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 animate-slide-in-left group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-all duration-300"></div>
              <img
                src={logo}
                alt="AAYOJAN Ai Logo"
                className="relative h-12 w-auto hover:scale-110 transition-transform duration-500"
              />
            </div>
          </a>
          
          <nav className="hidden lg:flex items-center gap-2 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-foreground/80 hover:text-foreground font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-1/2 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 animate-slide-in-right">
            <Button 
              className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-accent/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-lg font-medium transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;