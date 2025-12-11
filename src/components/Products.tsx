import { Card, CardContent } from "@/components/ui/card";
import { Users, Milk, Store, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Users,
    name: "Aayjon HR",
    tagline: "Smart HR Management for Schools & Industries",
    description: "Simplify HR. Empower Your People.",
    details: "A powerful yet easy-to-use human resource management system built for small and medium-sized schools, startups, and industries.",
    features: [
      "Online joining & exit procedures",
      "Automated attendance & biometric integration",
      "Payroll generation with payslip downloads",
      "Staff onboarding & document storage",
      "Leave & holiday management",
      "Multi-language: English, Hindi, Marathi"
    ],
    idealFor: "Schools, coaching classes, small factories, NGOs",
    platform: "Web + Mobile App (Android/iOS)",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Milk,
    name: "Aayjon Milk",
    tagline: "Daily Milk Supply & Subscription App",
    description: "Digitize Your Dairy Business. Deliver Better.",
    details: "Whether you manage a local dairy, cooperative, or independent milk route — Aayjon Milk helps you take full control of your daily operations.",
    features: [
      "Customer subscription management",
      "Daily delivery tracking with route optimization",
      "Auto-generated bills & receipts",
      "Payment tracking: UPI, cash, bank transfer",
      "Pause/resume delivery options",
      "Marathi/Hindi language support"
    ],
    idealFor: "Milkmen, dairies, tiffin services",
    platform: "Android App + Web Panel",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Store,
    name: "Aayjon Store",
    tagline: "Inventory & Warehouse App for Schools & SMEs",
    description: "Smart Inventory Control. No More Excel Sheets.",
    details: "Manage all your school or factory inventory — from books and uniforms to raw materials and finished goods.",
    features: [
      "Stock in/out tracking with reports",
      "Warehouse location mapping",
      "Low stock & expiry alerts",
      "Issue and receive logs",
      "Barcode & QR code support",
      "Asset Management (optional)"
    ],
    idealFor: "Schools, colleges, factories, distributors",
    platform: "Web + Mobile App (Android)",
    color: "from-emerald-500 to-teal-600"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powerful <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete software solutions designed for Indian businesses
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="glass-card border-0 hover:border-accent/20 transition-all duration-500 overflow-hidden animate-on-scroll group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-[320px_1fr] gap-0">
                {/* Product Header */}
                <div className={`bg-gradient-to-br ${product.color} p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <product.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-white/90 font-medium">{product.tagline}</p>
                  </div>
                </div>

                {/* Product Content */}
                <CardContent className="p-8 lg:p-10">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-accent mb-3">{product.description}</h4>
                    <p className="text-muted-foreground">{product.details}</p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-4">Key Features:</h5>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">Ideal For</span>
                      <p className="text-sm text-foreground font-medium mt-1">{product.idealFor}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">Platform</span>
                      <p className="text-sm text-foreground font-medium mt-1">{product.platform}</p>
                    </div>
                    <div className="ml-auto">
                      <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 group/btn">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;