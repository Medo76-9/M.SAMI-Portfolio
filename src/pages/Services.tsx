import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import AnimatedSection from "../components/AnimatedSection";
const services = [
  {
    icon: "🎨",
    title: "Brand Identity",
    description:
      "From concept to a complete visual system that builds trust and recognition.",
    features: [
      "Post & Story Design",
      "Visual Hierarchy",
      "Color & Typography",
      "Creative Concepts",
      "Consistent Branding",
    ],
    price: "From $3,000",
    color: "from-primary to-accent",
    popular: false,
  },
  {
    icon: "✨",
    title: "Social Media Design",
    description:
      "Creative social media designs crafted to grab attention, boost engagement, and visually strengthen your brand across all platforms.",
    features: [
      "Content Strategy",
      "Post & Carousel Design",
      "Ad Creatives",
      "Brand Visual Identity",
      "Engagement-Oriented Design",
    ],
    color: "from-secondary to-accent",
    popular: true,
  },
  {
    icon: "🎬",
    title: "Motion Graphics",
    description:
      "Animations that bring your message to life with cinematic personality.",
    features: [
      "Logo Animation",
      "Social Media Motion",
      "Animated Ads",
      "Text & Typography Animation",
      "Simple Transitions & Effects",
    ],
    price: "From $2,000",
    color: "from-accent to-primary",
    popular: false,
  },
  {
    icon: "📂",
    title: "Graphic Layouts",
    description:
      "Strategic layout designs focused on balance, clarity, and structure—ensuring every element is placed with purpose and visual harmony.",
    features: [
      "Layout Planning",
      "Grid-Based Design",
      "Content Organization",
      "Typographic Balance",
      "Clean Visual Flow",
    ],
    color: "from-tertiary to-primary",
    popular: false,
  },
  {
    icon: "🖼️",
    title: "Print Design",
    description:
      "High-quality print designs crafted with precision, focusing on layout, color accuracy, and production-ready details to ensure flawless printed results.",
    features: [
      "Business Cards & Stationery",
      "Flyers & Brochures",
      "Posters & Roll-Ups",
      "Print-Ready Files (CMYK)",
      "Bleed, Margins & Export",
    ],
    color: "from-primary to-secondary",
    popular: false,
  },
  {
    icon: "📝",
    title: "Campaign Design",
    problem: "Need designs ready for print?",
    description:
      "Strategic campaign designs that unify visuals across digital and print, creating a cohesive brand story with measurable impact.",
    features: [
      "Campaign Creative Direction",
      "Social, Print & Ads Assets",
      "Unified Visual Language",
      "Scalable Design System",
      "Campaign Launch Suppor",
    ],
    color: "from-accent to-secondary",
    popular: true,
  },
];
const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay cursor-default">
      <Navigation />

      <main className="pt-32 pb-20">
        <section className="px-6">
          <div className="container mx-auto max-w-7xl">
            <AnimatedSection className="text-center mb-20">
              <span className="text-accent font-display font-bold text-sm tracking-wider">
                SERVICES
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mt-4">
                What I can do
                <span className="text-gradient-hero"> for you</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                From brand strategy to final delivery, I offer comprehensive
                creative services tailored to make your brand stand out.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  delay={index * 0.1}
                  direction="scale"
                >
                  <motion.div
                    className={`relative h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all group`}
                    whileHover={{
                      y: -10,
                    }}
                    data-cursor={service.title}
                  >
                    {service.popular && (
                      <motion.div
                        className="absolute -top-3 right-6 px-4 py-1 bg-secondary text-secondary-foreground text-sm font-display font-bold rounded-full"
                        animate={{
                          rotate: [-3, 3, -3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        Popular ⭐
                      </motion.div>
                    )}

                    <motion.div
                      className="text-5xl mb-6"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-display font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="text-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-border/50"></div>

                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            {/* <AnimatedSection delay={0.5} className="text-center mt-20">
              <motion.div
                className="p-12 rounded-3xl bg-gradient-hero relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                    Need something custom?
                  </h2>
                  <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                    Every project is unique. Let's chat about your specific
                    needs and create a tailored solution just for you.
                  </p>
                  <motion.a
                    href="/contact"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="inline-block px-8 py-4 bg-foreground text-background font-display font-bold rounded-full"
                    data-cursor="Let's Chat"
                  >
                    Get a Custom Quote
                  </motion.a>
                </div>

                
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-foreground/10 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-foreground/10 rounded-full" />
              </motion.div>
            </AnimatedSection> */}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};
export default Services;
