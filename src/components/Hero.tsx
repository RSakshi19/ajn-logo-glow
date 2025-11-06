import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo showcase */}
          <div className="mb-8 animate-slide-up">
            <img
              src={logo}
              alt="AAYOJAN Ai"
              className="mx-auto h-40 w-auto animate-pulse-glow"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Transform Your Vision with{" "}
            <span className="text-accent">AAYOJAN Ai</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Techno - Sankalp to Siddhi
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
            Empowering innovation through cutting-edge technology solutions. 
            From conception to realization, we bring your technological aspirations to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent text-lg px-8 py-6">
              Explore Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
