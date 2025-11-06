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
              About <span className="text-accent">AAYOJAN Ai</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At AAYOJAN Ai, we believe in the transformative power of technology. 
                Our mission is embodied in our tagline: <strong className="text-foreground">"Techno - Sankalp to Siddhi"</strong> 
                - turning technological aspirations into achievements.
              </p>
              
              <p>
                We specialize in creating innovative solutions that bridge the gap between 
                vision and reality. With cutting-edge AI and technology expertise, we empower 
                businesses to achieve their goals efficiently and effectively.
              </p>
              
              <p>
                Our team of dedicated professionals combines technical excellence with creative 
                problem-solving to deliver solutions that not only meet but exceed expectations.
              </p>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-1">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
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
