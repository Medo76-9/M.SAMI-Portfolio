import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import FooterSection from '../components/FooterSection';
import AnimatedSection from '../components/AnimatedSection';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a deep dive into your brand, goals, and vision. This is where the magic begins!',
    icon: '🔍',
    color: 'bg-primary',
    details: ['Brand questionnaire', 'Competitor analysis', 'Target audience research', 'Goal setting'],
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Armed with insights, we craft a strategic roadmap that guides every creative decision.',
    icon: '🎯',
    color: 'bg-secondary',
    details: ['Mood boards', 'Creative direction', 'Content strategy', 'Timeline planning'],
  },
  {
    number: '03',
    title: 'Design',
    description: 'This is where ideas come to life. Concepts are explored, refined, and polished to perfection.',
    icon: '✨',
    color: 'bg-accent',
    details: ['Concept development', 'Design iterations', 'Client feedback', 'Refinements'],
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Final assets are prepared and delivered with care, ready to make an impact in the world.',
    icon: '🚀',
    color: 'bg-tertiary',
    details: ['File preparation', 'Asset delivery', 'Brand guidelines', 'Ongoing support'],
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-overlay">
      <CustomCursor />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <section className="px-6">
          <div className="container mx-auto max-w-7xl">
            <AnimatedSection className="text-center mb-20">
              <span className="text-tertiary font-display font-bold text-sm tracking-wider">
                PROCESS
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mt-4">
                How the
                <span className="text-gradient-sunset"> magic happens</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Every great project follows a proven process. Here's how we'll 
                transform your vision into reality, step by step.
              </p>
            </AnimatedSection>

            {/* Process Steps */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary via-accent to-tertiary rounded-full hidden md:block" />

              {processSteps.map((step, index) => (
                <AnimatedSection
                  key={step.number}
                  delay={index * 0.2}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  className="mb-24 last:mb-0"
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <motion.div
                      className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors`}>
                        <motion.span
                          className="text-6xl block mb-4"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {step.icon}
                        </motion.span>
                        <span className="text-primary/50 font-display font-bold text-5xl">
                          {step.number}
                        </span>
                        <h3 className="text-3xl font-display font-bold mt-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mt-4 mb-6">
                          {step.description}
                        </p>
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {step.details.map((detail) => (
                            <span
                              key={detail}
                              className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Center dot */}
                    <motion.div
                      className={`relative z-10 w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-2xl font-display font-bold text-foreground`}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(255,255,255,0.1)',
                          '0 0 0 20px rgba(255,255,255,0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* FAQ Section */}
            <AnimatedSection className="mt-32">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
                Common <span className="text-gradient-hero">Questions</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { q: 'How long does a typical project take?', a: 'Most projects take 4-8 weeks, depending on complexity and scope.' },
                  { q: 'What do you need to get started?', a: 'A filled questionnaire, any existing brand assets, and your vision!' },
                  { q: 'Do you offer revisions?', a: 'Yes! All packages include rounds of revisions to ensure you love the result.' },
                  { q: 'Can we hop on a call first?', a: 'Absolutely! I offer free discovery calls to discuss your project.' },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-display font-bold text-lg mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Process;
