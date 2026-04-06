import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Link,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Locations", href: "#locations" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/estinsurgicalng?igsh=MXFlcW91bWVkazI4cA%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: Link,
    href: "https://www.tiktok.com/@estinsurgicalng?_r=1&_t=ZS-9409jKWSCQu",
    label: "Tiktok",
  },

  {
    icon: Instagram,
    href: "https://www.instagram.com/estinsurgical?igsh=aTMxdHF4b2txc3Bh",
    label: "Instagram",
  },
];

export const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-medical section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  ES
                </span>
              </div>
              <span className="font-heading font-bold text-xl">
                Estin Surgical
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Your trusted partner for quality medical and surgical equipment in
              Lagos and across Nigeria. Serving healthcare institutions with
              excellence since 2019.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Estin Surgical, 3 Thomas Salako St, Ogba, Ikeja 100271, Lagos,
                  Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+2347046615168"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  +234 704 661 5168
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+2348163107300"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  +234 816 310 7300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:estinhealthcustomerservice@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  estinhealthcustomerservice@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Estin Surgical. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
