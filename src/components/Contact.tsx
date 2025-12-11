import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@aayojanai.com", href: "mailto:info@aayojanai.com" },
    { icon: Phone, label: "Phone", value: "+91 XXX XXX XXXX", href: "tel:+91XXXXXXXXXX" },
    { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India", href: "#" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your vision into reality? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card border-0 overflow-hidden animate-on-scroll">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-background/50 border-border/50 focus:border-accent/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background/50 border-border/50 focus:border-accent/50 h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Subject</label>
                  <Input 
                    placeholder="How can we help?" 
                    className="bg-background/50 border-border/50 focus:border-accent/50 h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="min-h-[140px] bg-background/50 border-border/50 focus:border-accent/50 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            {/* Logo and intro */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-accent/20 blur-[40px] rounded-full"></div>
                <img
                  src={logo}
                  alt="AAYOJAN Ai"
                  className="relative h-24 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're here to help you achieve your technological aspirations. 
                Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group"
                >
                  <Card className="glass-card border-0 hover:border-accent/30 transition-all duration-300 hover-lift h-full">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-medium text-foreground">{item.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* CTA */}
            <Card className="glass-card border-accent/20 overflow-hidden">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Prefer a quick chat?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with us on WhatsApp for instant support
                </p>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;