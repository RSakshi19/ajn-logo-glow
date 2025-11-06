import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const reasons = [
  "Made in India, for Indian businesses",
  "Simple UI – no technical knowledge required",
  "Multilingual – Serve in English, Hindi, and Marathi",
  "Scalable – Works for 5 or 500 users",
  "Friendly Support – Available via WhatsApp, phone, and email",
  "Pocket Friendly – Affordable pricing for SMEs"
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">AAYOJAN AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for simple, scalable, and smart software solutions
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 border-accent/20 shadow-elegant animate-on-scroll">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChoose;
