import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import AnimatedSection from "../components/AnimatedSection";

const categories = [
  "All",
  "Branding",
  "Social Media",
  "Thumbnail",
  "Education",
  "Typography",
];

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Branding",
    image: "/photos-uploads/brand 3.png",
    color: "from-primary to-accent",
    size: "medium",
  },
  {
    id: 2,
    // title: "Neon Dreams",
    category: "Branding",
    image: "./photos-uploads/brand 2.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 3,
    // title: "Neon Dreams",
    category: "Branding",
    image: "./photos-uploads/brand 1.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 4,
    // title: "Neon Dreams",
    category: "Branding",
    image: "./photos-uploads/brand 5.png",
    color: "from-primary to-accent",
    size: "medium",
  },
  {
    id: 5,
    // title: "Neon Dreams",
    category: "Branding",
    image: "./photos-uploads/brand 4.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 6,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 7.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 7,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 2.png",
    color: "from-primary to-accent",
    size: "medium",
  },
  {
    id: 8,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 4.jpeg",
    color: "from-primary to-accent",
    size: "small",
  },
  {
    id: 9,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 8.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 10,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 9.png",
    color: "from-primary to-accent",
    size: "small",
  },
  {
    id: 11,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 10.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 12,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 3.png",
    color: "from-primary to-accent",
    size: "medium",
  },
  {
    id: 13,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 5.png",
    color: "from-primary to-accent",
    size: "medium",
  },
  {
    id: 14,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 6.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 15,
    // title: "Neon Dreams",
    category: "Social Media",
    image: "./photos-uploads/social media 1.png",
    color: "from-primary to-accent",
    size: "large",
  },
  {
    id: 16,
    // title: "Neon Dreams",
    category: "Thumbnail",
    image: "./photos-uploads/Thumbnail 1.png",
    color: "from-primary to-accent",
    size: "huge",
  },
  {
    id: 17,
    // title: "Neon Dreams",
    category: "Thumbnail",
    image: "./photos-uploads/Thumbnail 2.png",
    color: "from-primary to-accent",
    size: "huge",
  },
  {
    id: 18,
    // title: "Neon Dreams",
    category: "Thumbnail",
    image: "./photos-uploads/Thumbnail 3.png",
    color: "from-primary to-accent",
    size: "huge",
  },
  {
    id: 19,
    // title: "Neon Dreams",
    category: "Education",
    image: "./photos-uploads/مدرس 3.png",
    color: "from-primary to-accent",
    size: "huge",
  },
  {
    id: 20,
    // title: "Neon Dreams",
    category: "Education",
    image: "./photos-uploads/مدرسين-2.png",
    color: "from-primary to-accent",
    size: "huge",
  },
  {
    id: 21,
    // title: "Neon Dreams",
    category: "Education",
    image: "./photos-uploads/مدرسين-1.png",
    color: "from-primary to-accent",
    size: "huge",
  },
  {
    id: 22,
    // title: "Neon Dreams",
    category: "Typography",
    image: "./photos-uploads/typo 1.png",
    color: "from-primary to-accent",
    size: "newOne",
  },
  {
    id: 22,
    // title: "Neon Dreams",
    category: "Typography",
    image: "./photos-uploads/typo 2.png",
    color: "from-primary to-accent",
    size: "newOne",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden cursor-default">
      <Navigation />

      <main className="pt-32 pb-20">
        <section className="px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-display font-bold text-sm tracking-wider">
                PORTFOLIO
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mt-4">
                Creative <span className="text-gradient-hero">Playground</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                A curated collection of projects that showcase my passion for
                bold design and creative storytelling.
              </p>
            </AnimatedSection>

            {/* Filter */}
            <AnimatedSection
              delay={0.2}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-display font-medium ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-muted"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </AnimatedSection>

            {/* Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    onClick={() => setSelectedProject(project)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                      project.size === "large"
                        ? "md:col-span-2 md:row-span-2"
                        : project.size === "medium"
                        ? "md:row-span-2"
                        : project.size === "huge"
                        ? "md:col-span-3 row-span-2 col-span-1 row-span-1"
                        : project.size === "newOne"
                        ? "md:col-span-3 row-span-1 col-span-1 row-span-1"
                        : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                    />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <span className="text-sm bg-background/30 px-3 py-1 rounded-full w-fit">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-display font-bold mt-3">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold z-50 hover:text-red-500 transition-colors"
            >
              &times;
            </button>

            <motion.img
              src={selectedProject.image}
              alt={selectedProject.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="max-w-full max-h-full object-contain rounded-2xl cursor-zoom-in"
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
            />
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
};

export default Portfolio;
