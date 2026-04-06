import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/about-store.jpg";

const features = [
  "Over 15 years of industry experience",
  "Certified and quality-tested equipment",
  "Serving 500+ healthcare institutions",
  "Expert consultation and support",
  "Competitive pricing and flexible terms",
  "After-sales service and maintenance",
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-medical">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-medical-xl">
              <img
                src={aboutImage}
                alt="Estin Surgical store interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-medical-lg border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Your Trusted Partner in Medical Equipment Supply
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Estin Surgical was established to meet a growing need identified
              through Estin Pharmacy, a 40-year-old healthcare business based in
              Ogba, Lagos. Although our first official store opened in 2019, the
              company is built on years of hands-on experience from a trusted
              medical supply operation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Today, Estin Surgical is a leading supplier of medical and
              surgical equipment and consumables in Lagos, committed to
              delivering high-quality, internationally compliant products. We
              source exclusively from certified manufacturers and provide
              comprehensive after-sales support to ensure reliability and
              optimal performance for healthcare institutions.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">
                    Quality Assured
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
