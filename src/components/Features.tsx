import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Rocket, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Innovation",
    description: "Leverage cutting-edge artificial intelligence to transform your business processes and drive efficiency.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "From concept to launch in record time with our agile development methodology and proven frameworks.",
  },
  {
    icon: Target,
    title: "Precision Solutions",
    description: "Tailored technology solutions designed to meet your specific business objectives and challenges.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Built for speed and scalability, ensuring your systems perform flawlessly under any load.",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to elevate your business to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 animate-on-scroll bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
