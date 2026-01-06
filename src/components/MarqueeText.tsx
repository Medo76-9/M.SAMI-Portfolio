import { motion } from "framer-motion";

const MarqueeText = () => {
  const items = [
    { text: "SOCIAL MEDIA DESIGN", color: "text-primary" },
    { text: "✦", color: "text-secondary" },
    { text: "CONTENT VISUALS", color: "text-accent" },
    { text: "✦", color: "text-tertiary" },
    { text: "BRANDING", color: "text-primary" },
    { text: "✦", color: "text-secondary" },
    { text: "ILLUSTRATION", color: "text-accent" },
    { text: "✦", color: "text-tertiary" },
    { text: "ADS", color: "text-primary" },
    { text: "✦", color: "text-secondary" },
    { text: "THUMBNAILS", color: "text-accent" },
    { text: "✦", color: "text-tertiary" },
  ];

  return (
    <div className="relative overflow-hidden py-8 border-y border-border/30 bg-card/30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`mx-8 text-2xl md:text-4xl font-display font-bold ${item.color}`}
          >
            {item.text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
