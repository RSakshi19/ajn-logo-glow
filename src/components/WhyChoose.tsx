import { Card, CardContent } from "@/components/ui/card";
import { Check, Flag, Smartphone, Globe, Users, HeartHandshake, Wallet } from "lucide-react";

const reasons = [
  { icon: Flag, text: "Made in India, for Indian businesses" },
  { icon: Smartphone, text: "Simple UI – no technical knowledge required" },
  { icon: Globe, text: "Multilingual – English, Hindi, and Marathi" },
  { icon: Users, text: "Scalable – Works for 5 or 500 users" },
  { icon: HeartHandshake, text: "Friendly Support – WhatsApp, phone, email" },
  { icon: Wallet, text: "Pocket Friendly – Affordable for SMEs" }
];

const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">AAYOJAN AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for simple, scalable, and smart software solutions
          </p>
        </div>

        <Card className="max-w-5xl mx-auto glass-card border-0 overflow-hidden animate-on-scroll">
          {/* Decorative header */}
          <div className="h-2 bg-gradient-to-r from-accent via-amber-400 to-accent"></div>
          
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium leading-relaxed">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-10 pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground">
                Trusted by <span className="text-accent font-semibold">6+</span> organizations across India
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChoose;