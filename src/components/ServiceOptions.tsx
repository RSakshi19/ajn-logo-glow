import { Card, CardContent } from "@/components/ui/card";
import { Server, Headphones, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceOptions = () => {
  const options = [
    {
      icon: Server,
      title: "Software-as-a-Service",
      subtitle: "Self-Managed Solution",
      description: "Ideal for schools and institutions that want to manage HR operations internally with full control.",
      features: [
        "Complete HR software and mobile app installation",
        "Staff training for smooth onboarding",
        "Ongoing technical support",
        "Renewable subscription model"
      ],
      footer: "You manage day-to-day HR processes; we provide the tools and support.",
      popular: false
    },
    {
      icon: Headphones,
      title: "Full-Service Management",
      subtitle: "Managed by Us",
      description: "Perfect for institutions that want to outsource HR operations with minimal internal workload.",
      features: [
        "We manage all staff records and HR data",
        "Attendance, leave tracking & salary calculations",
        "Simply review and approve final payroll",
        "Accuracy, compliance & time savings guaranteed"
      ],
      footer: "Complete HR outsourcing — we handle everything, you focus on your core business.",
      popular: true
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Service Options
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Flexible <span className="gradient-text">Service Options</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the service model that works best for your organization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <Card 
              key={index}
              className={`glass-card border-0 overflow-hidden animate-on-scroll group transition-all duration-500 hover-lift relative ${
                option.popular ? 'ring-2 ring-accent/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular badge */}
              {option.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </span>
                </div>
              )}

              <CardContent className="p-8 md:p-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  option.popular ? 'bg-accent/20' : 'bg-accent/10'
                }`}>
                  <option.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-1">{option.title}</h3>
                <p className="text-accent font-medium mb-4">{option.subtitle}</p>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6">{option.description}</p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-foreground font-medium mb-6">{option.footer}</p>
                  <Button 
                    className={`w-full ${
                      option.popular 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20' 
                        : 'bg-foreground/10 hover:bg-foreground/20 text-foreground'
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;