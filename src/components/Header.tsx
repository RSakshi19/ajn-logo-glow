import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 animate-slide-in-left">
            <img
              src={logo}
              alt="AAYOJAN Ai Logo"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 animate-slide-up">
            <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="animate-slide-in-right">
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 glow-hover">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
