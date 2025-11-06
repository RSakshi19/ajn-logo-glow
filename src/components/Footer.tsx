import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="AAYOJAN Ai"
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 mb-4">
              Techno - Sankalp to Siddhi
            </p>
            <p className="text-primary-foreground/60">
              Transforming technological aspirations into reality through innovation and excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} AAYOJAN Ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
