import logo from "@/assets/logo.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-3xl opacity-20"></div>
              <img
                src={logo}
                alt="AAYOJAN Ai"
                className="relative mx-auto w-full max-w-md animate-float"
              />
            </div>
          </div>

          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-accent">AAYOJAN AI</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Though new to the industry, we've already developed <strong className="text-accent">6+ custom software solutions</strong> for clients across various sectors like education, HR, dairy, and inventory management. We combine smart technology with a deep understanding of operational needs to help organizations work simpler, faster, and smarter.
              </p>
              
              <p>
                At AAYOJAN AI, we're not just building software — we're building <strong className="text-foreground">trust, efficiency, and long-term partnerships</strong> with every solution we deliver.
              </p>
              
              <p className="text-foreground font-medium">
                AAYOJAN AI is the brainchild of <strong className="text-accent">Pranav Ladge</strong>, who serves as the Chief Operating Officer and Owner. With a passion for technology and a sharp understanding of operational challenges faced by growing institutions, Pranav Sir envisioned AAYOJAN AI as a bridge between complex business needs and simple, efficient digital solutions.
              </p>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20 glow-hover">
                    <div className="text-3xl font-bold text-accent mb-1">6+</div>
                    <div className="text-sm text-muted-foreground">Custom Solutions Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20 glow-hover">
                    <div className="text-3xl font-bold text-accent mb-1">Pune</div>
                    <div className="text-sm text-muted-foreground">Based in India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
