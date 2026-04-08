import { motion } from 'framer-motion';
import heroImage from '../assets/hero-animal.svg';

const features = [
  {
    title: 'Accurate classification',
    description:
      'Upload cattle or buffalo images and get fast type recognition powered by an intelligent model.',
  },
  {
    title: 'Responsive design',
    description:
      'A modern UI built for desktop and mobile with smooth interactions and professional visuals.',
  },
  {
    title: 'Gallery and insights',
    description:
      'Explore curated animal profiles, management tips, and a polished, production-style experience.',
  },
];

function Home() {
  return (
    <section className="section-card">
      <div className="hero-grid">
        <div className="hero-panel">
          <div className="hero-eyebrow">Smart Livestock Recognition</div>
          <h1 className="hero-title">Cattle and Buffalo Image Classification Platform</h1>
          <p className="hero-copy">
            Deploy a premium React application with fully responsive layout, dynamic multi-page flows, and image-based classification for cattle and buffalo management. Optimize farm decisions with intelligent visual insights.
          </p>
          <div className="hero-actions">
            <a href="/classify" className="button-primary">Classify an Image</a>
            <a href="/gallery" className="button-secondary">View Gallery</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbte8uyQGkqhQc3EgLSBpIqlPscMCU4a3MBA&s' alt="Cow and buffalo illustration" />
          </div>
        </div>
      </div>

      <div className="feature-grid" style={{ marginTop: '36px' }}>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="feature-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Home;
