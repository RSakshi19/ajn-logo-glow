import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Milk, Store, Check } from "lucide-react";

const products = [
  {
    icon: Users,
    name: "Aayjon HR",
    tagline: "Smart HR Management for Schools & Industries",
    description: "Simplify HR. Empower Your People.",
    details: "A powerful yet easy-to-use human resource management system built for small and medium-sized schools, startups, and industries. From attendance and payroll to leave and staff performance tracking — manage everything in one secure platform.",
    features: [
      "Online joining & exit procedures",
      "Automated attendance & biometric integration",
      "Payroll generation with payslip downloads",
      "Staff onboarding & document storage",
      "Leave & holiday management",
      "Role-based access for admin & staff",
      "Multi-language: English, Hindi, Marathi"
    ],
    idealFor: "Schools, coaching classes, small factories, and NGOs",
    platform: "Web + Mobile App (Android/iOS)"
  },
  {
    icon: Milk,
    name: "Aayjon Milk",
    tagline: "Daily Milk Supply & Subscription App",
    description: "Digitize Your Dairy Business. Deliver Better.",
    details: "Whether you manage a local dairy, cooperative, or independent milk route — Aayjon Milk helps you take full control of your daily operations. Manage customer subscriptions, automate billing, track deliveries, and get paid on time – all from your phone.",
    features: [
      "Customer subscription management",
      "Daily delivery tracking with route optimization",
      "Auto-generated bills & receipts",
      "Payment tracking: UPI, cash, bank transfer",
      "Pause/resume delivery options",
      "Marathi/Hindi language support"
    ],
    idealFor: "Milkmen, dairies, tiffin services, delivery businesses",
    platform: "Android App (for delivery), Web Panel (for admins)"
  },
  {
    icon: Store,
    name: "Aayjon Store",
    tagline: "Inventory & Warehouse App for Schools & SMEs",
    description: "Smart Inventory Control. No More Excel Sheets.",
    details: "Aayjon Store helps you manage all your school or factory inventory — from books and uniforms to raw materials and finished goods. Know what's in stock, what's needed, and where everything is — anytime, anywhere.",
    features: [
      "Stock in/out tracking with category-wise reports",
      "Warehouse location mapping",
      "Alerts for low stock & expiry items",
      "Issue and receive logs for departments",
      "Barcode & QR code scan support",
      "User roles for admin, storekeeper, and staff",
      "Inward and Outward tracking",
      "Asset Management (optional)"
    ],
    idealFor: "Schools, colleges, small factories, distributors",
    platform: "Web + Mobile App (Android)"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete software solutions designed for Indian businesses
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="bg-gradient-accent p-8 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-background/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-background mb-2">{product.name}</h3>
                  <p className="text-sm text-background/90 text-center font-medium">{product.tagline}</p>
                </div>

                <div className="p-6 md:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl text-accent mb-2">{product.description}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {product.details}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50 grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-foreground">Ideal For: </span>
                        <span className="text-sm text-muted-foreground">{product.idealFor}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground">Platform: </span>
                        <span className="text-sm text-muted-foreground">{product.platform}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
