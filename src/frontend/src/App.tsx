import {
  ChefHat,
  Clock,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const menuItems = [
  {
    name: "Mulbagal Masala Dosa",
    description:
      "Crispy golden dosa with aromatic potato filling, served with sambar & chutney",
    price: "\u20b980",
    image: "/assets/generated/mulbagal-masala-dosa.dim_600x400.jpg",
    tag: "Signature",
  },
  {
    name: "Pongal",
    description:
      "Creamy rice & lentil porridge tempered with ghee, cashews & curry leaves",
    price: "\u20b970",
    image: "/assets/generated/pongal.dim_600x400.jpg",
    tag: "Breakfast",
  },
  {
    name: "Veg Biryani",
    description:
      "Fragrant basmati rice cooked with fresh vegetables & aromatic spices",
    price: "\u20b9120",
    image: "/assets/generated/veg-biryani.dim_600x400.jpg",
    tag: "Special",
  },
  {
    name: "Paneer Butter Masala",
    description: "Soft paneer in rich, creamy tomato-butter gravy",
    price: "\u20b9140",
    image: "/assets/generated/paneer-butter-masala.dim_600x400.jpg",
    tag: "Popular",
  },
  {
    name: "Blue Lagoon",
    description: "Refreshing blue mocktail with a tropical twist",
    price: "\u20b960",
    image: "/assets/generated/blue-lagoon.dim_600x400.jpg",
    tag: "Drinks",
  },
];

const quotes = [
  {
    id: "q1",
    text: "Good food is the foundation of genuine happiness",
    author: "Auguste Escoffier",
  },
  {
    id: "q2",
    text: "Food is our common ground, a universal experience",
    author: "James Beard",
  },
  {
    id: "q3",
    text: "One cannot think well, love well, sleep well, if one has not dined well",
    author: "Virginia Woolf",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const values = [
  {
    icon: "\ud83c\udf3f",
    title: "100% Pure Veg",
    desc: "No compromise, no non-veg items ever",
  },
  {
    icon: "\ud83d\udc68\u200d\ud83c\udf73",
    title: "Expert Chefs",
    desc: "Masters of authentic South Indian recipes",
  },
  {
    icon: "\u2764\ufe0f",
    title: "Cooked with Love",
    desc: "Every dish made fresh with care",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileBookTable = () => {
    setMobileOpen(false);
    window.location.href = "#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur shadow-lg"
            : "bg-charcoal/60 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full bg-saffron flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-serif text-white font-bold text-lg leading-tight">
                Swathi Hotel
              </p>
              <p className="text-saffron text-xs font-medium tracking-widest uppercase">
                &amp; Cafe
              </p>
            </div>
          </a>

          <nav
            className="hidden md:flex items-center gap-6"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-saffron text-sm font-medium transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-saffron hover:bg-amber text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors"
              data-ocid="nav.primary_button"
            >
              Book a Table
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-charcoal border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-saffron py-1 text-base font-medium transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={handleMobileBookTable}
                  className="bg-saffron hover:bg-amber text-white font-semibold text-sm px-5 py-2.5 rounded-full text-center transition-colors mt-1"
                  data-ocid="nav.primary_button"
                >
                  Book a Table
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        data-ocid="hero.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/uploads/trashed-1777086414-screenshot_2026-03-26-08-36-43-27_3d9111e2d3171bf4882369f490c087b4_1-019d2831-3c6f-73ca-94a5-753653b199f5-1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <Leaf className="w-4 h-4 text-saffron" />
              <span className="text-saffron text-sm font-semibold tracking-widest uppercase">
                Pure Vegetarian
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4"
            >
              Swathi Hotel
              <span className="block text-saffron italic">&amp; Cafe</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/80 text-lg md:text-xl font-light mb-2"
            >
              Authentic South Indian Cuisine
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-script text-saffron text-2xl md:text-3xl mb-8"
            >
              Where Every Meal Tells a Story
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#menu"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-3 rounded-full transition-all"
                data-ocid="hero.primary_button"
              >
                Explore Menu
              </a>
              <a
                href="#location"
                className="bg-saffron hover:bg-amber text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
                data-ocid="hero.secondary_button"
              >
                Find Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/20"
            >
              {[
                { val: "5+", label: "Years Serving" },
                { val: "50+", label: "Menu Items" },
                { val: "1000+", label: "Happy Guests" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-saffron font-serif text-2xl font-bold">
                    {s.val}
                  </p>
                  <p className="text-white/60 text-xs tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Quotes Band */}
      <section className="bg-saffron py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center px-4"
              >
                <Star className="w-5 h-5 text-white/70 mx-auto mb-3" />
                <p className="font-serif text-white text-lg font-semibold italic leading-snug mb-2">
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="text-white/70 text-sm">&mdash; {q.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section
        id="menu"
        className="py-20 px-4 bg-cream"
        data-ocid="menu.section"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-saffron text-sm font-semibold tracking-widest uppercase mb-2">
              Our Specialties
            </p>
            <h2 className="font-serif text-foreground text-4xl md:text-5xl font-bold">
              Culinary Delights
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-saffron" />
              <ChefHat className="w-5 h-5 text-saffron" />
              <div className="h-px w-16 bg-saffron" />
            </div>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Every dish is crafted with love, using the finest fresh
              ingredients and time-honored recipes passed down through
              generations.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-ocid="menu.list"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
                data-ocid={`menu.item.${i + 1}`}
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-foreground text-lg font-bold leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-saffron font-bold text-lg ml-2 shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3.5 h-3.5 fill-saffron text-saffron"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-4 bg-charcoal"
        data-ocid="about.section"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-saffron/50" />
              <Leaf className="w-5 h-5 text-saffron" />
              <div className="h-px w-12 bg-saffron/50" />
            </div>
            <p className="text-saffron text-sm font-semibold tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
              A Legacy of Pure Vegetarian Cuisine
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Since our founding, Swathi Hotel and Cafe has been dedicated to
              serving authentic, wholesome vegetarian food. Every dish is
              prepared with love, using the finest ingredients to bring you the
              true flavors of Karnataka and South India.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-saffron/40 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-saffron" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-saffron/40 to-transparent" />
            </div>

            <div className="inline-block">
              <p className="font-script text-saffron text-5xl md:text-6xl">
                Swathi Hotel &amp; Cafe
              </p>
              <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-saffron to-transparent rounded-full" />
              <p className="text-white/50 text-xs tracking-widest uppercase mt-3">
                Pure Veg &middot; Authentic Flavors
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="font-serif text-white font-bold mb-1">
                  {v.title}
                </h4>
                <p className="text-white/50 text-sm">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section
        id="location"
        className="py-20 px-4 bg-cream"
        data-ocid="location.section"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-saffron text-sm font-semibold tracking-widest uppercase mb-2">
              Find Us
            </p>
            <h2 className="font-serif text-foreground text-4xl md:text-5xl font-bold">
              Visit Us
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-saffron" />
              <MapPin className="w-5 h-5 text-saffron" />
              <div className="h-px w-16 bg-saffron" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-card border border-border"
            >
              <iframe
                title="Swathi Hotel Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Kendatti+Gollahalli+Karnataka+563133"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="location.map_marker"
              />
            </motion.div>

            <motion.div
              id="contact"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              data-ocid="contact.section"
            >
              <h3 className="font-serif text-foreground text-2xl font-bold">
                Get in Touch
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-saffron/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Kolar Highway, Kendatti Gollahalli,
                      <br />
                      Karnataka 563133
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-saffron/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:08197928402"
                      className="text-saffron font-semibold text-lg hover:text-amber transition-colors"
                      data-ocid="contact.link"
                    >
                      081979 28402
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-saffron/15 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-muted-foreground text-sm">Open Daily</p>
                    <p className="text-foreground font-medium">
                      6:00 AM &ndash; 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:08197928402"
                className="inline-flex items-center gap-2 bg-saffron hover:bg-amber text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                data-ocid="contact.primary_button"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>

              <div className="bg-saffron/10 border border-saffron/20 rounded-xl p-4">
                <p className="text-foreground text-sm font-medium">
                  <strong>Dine-in &amp; Takeaway</strong> available. Walk-ins
                  welcome!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer-brown text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-full bg-saffron flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-tight">
                    Swathi Hotel
                  </p>
                  <p className="text-saffron text-xs tracking-widest uppercase">
                    &amp; Cafe
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Pure Veg &middot; Authentic South Indian Cuisine
                <br />
                Serving with love since 2019
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-white/60 hover:text-saffron text-sm transition-colors"
                      data-ocid="nav.link"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base mb-4">Contact</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                  Kolar Highway, Kendatti Gollahalli, Karnataka 563133
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-saffron shrink-0" />
                  <a
                    href="tel:08197928402"
                    className="hover:text-saffron transition-colors"
                  >
                    081979 28402
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-saffron shrink-0" />
                  6:00 AM &ndash; 11:00 PM Daily
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Swathi Hotel and Cafe. All
              rights reserved.
            </p>
            <p>
              Built with &hearts; using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-saffron transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
