import { motion } from "framer-motion";
import {
  Stethoscope,
  Syringe,
  Building2,
  HeadphonesIcon,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Equipment Sales",
    description:
      "Wide range of diagnostic and monitoring equipment including stethoscopes, blood pressure monitors, pulse oximeters, and more.",
  },
  {
    icon: Syringe,
    title: "Surgical Equipment Supply",
    description:
      "Complete surgical instrument sets, sterilization equipment, operating room supplies, and surgical consumables.",
  },
  {
    icon: Building2,
    title: "Hospital & Clinic Equipment",
    description:
      "Hospital beds, patient monitors, wheelchairs, examination tables, and complete clinic setup solutions.",
  },
  {
    icon: HeadphonesIcon,
    title: "Equipment Consultation",
    description:
      "Expert guidance on selecting the right equipment for your healthcare facility's specific needs and budget.",
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "Professional delivery and installation services across Lagos and other Nigerian cities with proper setup support.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Comprehensive after-sales service including equipment maintenance, repairs, and technical support.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Comprehensive Medical Equipment Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From equipment supply to installation and maintenance, we provide
            end-to-end solutions for all your healthcare needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-medical-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
