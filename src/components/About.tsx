import logo from "@/assets/logo.png";
import { Award, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Award, label: "6+ Solutions", desc: "Delivered" },
    { icon: Users, label: "Pune", desc: "Based" },
    { icon: Target, label: "Multiple", desc: "Industries" },
    { icon: Lightbulb, label: "Innovation", desc: "Driven" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Logo Side */}
          <div className="animate-on-scroll">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-accent/10 rounded-full animate-spin-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-accent/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
              </div>
              
              <img
                src={logo}
                alt="AAYOJAN Ai"
                className="relative mx-auto w-full max-w-sm animate-float drop-shadow-2xl"
              />
            </div>

            {/* Highlight badges */}
            <div className="grid grid-cols-4 gap-4 mt-12">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-default"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              About Us
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              About <span className="gradient-text">AAYOJAN AI</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Though new to the industry, we've already developed <span className="text-accent font-semibold">6+ custom software solutions</span> for clients across various sectors like education, HR, dairy, and inventory management.
              </p>
              
              <p>
                We combine smart technology with a deep understanding of operational needs to help organizations work <span className="text-foreground font-medium">simpler, faster, and smarter</span>.
              </p>
              
              <div className="glass-card rounded-2xl p-6 my-8">
                <p className="text-foreground leading-relaxed">
                  At AAYOJAN AI, we're not just building software — we're building <span className="gradient-text font-semibold">trust, efficiency, and long-term partnerships</span> with every solution we deliver.
                </p>
              </div>
              
              <p>
                AAYOJAN AI is the brainchild of <span className="text-accent font-semibold">Pranav Ladge</span>, who serves as the Chief Operating Officer and Owner. With a passion for technology and a sharp understanding of operational challenges, Pranav Sir envisioned AAYOJAN AI as a bridge between complex business needs and simple, efficient digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;