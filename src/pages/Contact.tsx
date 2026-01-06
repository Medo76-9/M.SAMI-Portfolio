import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import AnimatedSection from "../components/AnimatedSection";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon! 🚀");
    setFormData({
      name: "",
      email: "",
      project: "",
      budget: "",
      message: "",
    });
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const budgetOptions = [
    "Less than $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Not sure yet",
  ];
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay cursor-default">
      <Navigation />

      <main className="pt-32 pb-20">
        <section className="px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left side - Info */}
              <AnimatedSection direction="left">
                <span className="text-secondary font-display font-bold text-sm tracking-wider">
                  LET'S TALK
                </span>
                <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 leading-tight">
                  Have a project
                  <br />
                  <span className="text-gradient-hero">in mind?</span>
                </h1>
                <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                  I'm always excited to work on new projects! Whether you have a
                  fully formed idea or just a spark of inspiration, let's chat
                  and make something amazing together.
                </p>

                {/* Contact info */}
                <div className="mt-12 space-y-6">
                  <motion.a
                    target="_balnk"
                    href="mailto:nadersamy178@gmail.com"
                    className="flex items-center gap-4 group"
                    whileHover={{
                      x: 10,
                    }}
                    data-cursor="Email"
                  >
                    <motion.div
                      className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors"
                      whileHover={{
                        rotate: 10,
                      }}
                    >
                      📧
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-display font-bold group-hover:text-primary transition-colors">
                        nadersamy178@gmail.com
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/+201067649551"
                    target="_blank"
                    className="flex items-center gap-4 group"
                    whileHover={{
                      x: 10,
                    }}
                    data-cursor="Call"
                  >
                    <motion.div
                      className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-secondary/20 transition-colors"
                      whileHover={{
                        rotate: 10,
                      }}
                    >
                      📱
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-display font-bold group-hover:text-secondary transition-colors">
                        +201067649551
                      </div>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{
                      x: 10,
                    }}
                  >
                    <motion.div
                      className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl"
                      whileHover={{
                        rotate: 10,
                      }}
                    >
                      📍
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Location
                      </div>
                      <div className="font-display font-bold">Egypt</div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative */}
                <motion.div
                  className="mt-12 flex items-center gap-4"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <div className="flex -space-x-3">
                    {["🎨", "✨", "🚀", "💜"].map((emoji, i) => (
                      <motion.div
                        key={i}
                        className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-xl border-2 border-background"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        {emoji}
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    Usually responds within 24 hours
                  </span>
                </motion.div>
              </AnimatedSection>

              {/* Right side - Form */}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};
export default Contact;
