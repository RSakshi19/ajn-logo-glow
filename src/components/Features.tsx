import { Card, CardContent } from "@/components/ui/card";
import { Users, Fuel, Package, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "HR & Workforce Management",
    description: "Complete employee management solution",
    features: [
      "Employee database management",
      "Leave & attendance tracking",
      "Payroll systems",
      "Appraisal & compliance reporting",
      "Task management & work checklist"
    ],
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Fuel,
    title: "Fuel & Fleet Management",
    description: "Comprehensive fleet tracking system",
    features: [
      "Vehicle-wise fuel tracking",
      "Document management (RC, insurance)",
      "Workshop & maintenance tracking",
      "Service & renewal alerts"
    ],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Package,
    title: "Retail & Small Warehouses",
    description: "Smart inventory control system",
    features: [
      "Material & inventory management",
      "Stock alerts & supplier tracking",
      "Sales & purchase records",
      "QR & barcode tracking",
      "Asset management"
    ],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored software solutions for small and medium-sized businesses across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group glass-card border-0 hover:border-accent/30 transition-all duration-500 hover-lift animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                
                {/* Features list */}
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      <ChevronRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;