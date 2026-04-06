import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Estin Surgical - Ogba branch 1 (Salako street)",
    address:
      "Estin Surgical, 3 Thomas Salako St, Ogba, Ikeja 100271, Lagos, Nigeria",
    phone: "+234 816 310 7300",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM",
    mapUrl: "https://maps.app.goo.gl/rMeUvnjjKEcpSpJv8?g_st=ic",
  },
  {
    name: "Estin Surgical - branch 2 - Ogba Aguda",
    address:
      "3 Ijaiye Rd, Ogba, Ikeja 101233, Lagos, Nigeria (opposite WAEC office & beside GIG logistics)",
    phone: "+234 704 661 5168",
    secondPhone: "+234 808 878 4078",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM",
    mapUrl: "https://maps.app.goo.gl/cMTysUWBZbFpEECt5?g_st=ic",
  },
];

export const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-background">
      <div className="container-medical">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Visit Our Showrooms
          </h2>
          <p className="text-muted-foreground text-lg">
            We have two convenient locations in Lagos to serve you better. Visit
            us to see our products firsthand.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-medical-md hover:shadow-medical-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {location.name}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{location.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{location.hours}</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-secondary"
                onClick={() => window.open(location.mapUrl, "_blank")}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-medical-lg border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.90993080476!2d3.2756889999999998!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1704672000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Estin Surgical Locations in Lagos"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
