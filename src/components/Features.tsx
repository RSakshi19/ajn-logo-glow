import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Fuel, Package } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "HR & Workforce Management",
    description: "Employee database, leave & attendance tracking, payroll systems, appraisal and compliance reporting, task management and work checklist.",
  },
  {
    icon: Fuel,
    title: "Fuel & Fleet Management",
    description: "Vehicle-wise fuel tracking, document management (RC, insurance, permits), workshop & maintenance stock tracking, alerts for due services.",
  },
  {
    icon: Package,
    title: "Retail & Small Warehouses",
    description: "Material & inventory management, stock alerts, supplier tracking, sales & purchase records, inward & outward stock, asset management, QR & barcode tracking.",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="text-accent">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored software solutions for small and medium-sized businesses across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
