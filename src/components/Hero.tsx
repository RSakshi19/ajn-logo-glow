import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo showcase with glow */}
          <div className="mb-10 animate-slide-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-accent/30 blur-[60px] rounded-full animate-pulse-glow"></div>
              <img
                src={logo}
                alt="AAYOJAN Ai"
                className="relative mx-auto h-36 md:h-44 w-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">Transforming Ideas into Reality</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up leading-tight" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Transform Your</span>
            <br />
            <span className="text-foreground">Vision with </span>
            <span className="gradient-text text-glow">AAYOJAN</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold mb-4 animate-slide-up tracking-wide" style={{ animationDelay: "0.4s" }}>
            Techno - Sankalp to Siddhi
          </p>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: "0.6s" }}>
            Empowering innovation through cutting-edge technology solutions. 
            From conception to realization, we bring your technological aspirations to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-7 font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-accent/50 text-lg px-8 py-7 font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Learn More
            </Button>
          </div>

          {/* Stats preview */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "1s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">6+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center border-x border-border/30">
              <div className="text-3xl md:text-4xl font-bold gradient-text">4+</div>
              <div className="text-sm text-muted-foreground mt-1">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;