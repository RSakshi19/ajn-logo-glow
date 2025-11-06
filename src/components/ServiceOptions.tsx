import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Headphones } from "lucide-react";

const ServiceOptions = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible <span className="text-accent">Service Options</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the service model that works best for your organization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 animate-on-scroll">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Server className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl mb-2">Software-as-a-Service</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Self-Managed Solution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ideal for schools and institutions that want to manage HR operations internally with full control.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Complete HR software and mobile app installation at your main school and branches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Staff training to ensure smooth onboarding and usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Ongoing technical support for any issues or queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Available on a renewable subscription model</span>
                </li>
              </ul>
              <p className="text-sm text-foreground font-medium mt-4 pt-4 border-t border-border/50">
                You manage day-to-day HR processes; we provide the tools and support.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 animate-on-scroll bg-accent/5">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Headphones className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl mb-2">Full-Service Management</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Managed by Us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Perfect for institutions that want to outsource HR operations with minimal internal workload.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">We manage and maintain all staff records and HR data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">We handle attendance, leave tracking, and salary calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">You simply review and approve final payroll</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Ensures accuracy, compliance, and time savings for your team</span>
                </li>
              </ul>
              <p className="text-sm text-foreground font-medium mt-4 pt-4 border-t border-border/50">
                Complete HR outsourcing — we handle everything, you focus on your core business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
