function About() {
  return (
    <section className="section-card">
      <div className="highlight-card">
        <div className="hero-eyebrow">About the platform</div>
        <h2>An intelligent livestock interface built for modern farm operations.</h2>
        <p className="hero-copy">
          This project combines React, Vite, and TensorFlow.js for a polished animal classifier that specifically supports cattle and buffalo workflows. It offers a production-style website with multi-page navigation, responsive layout, and visual data presentation.
        </p>
      </div>

      <div className="highlight-grid" style={{ marginTop: '28px' }}>
        <div className="highlight-item">
          <h4>Fast model inference</h4>
          <p>Model classification runs directly in the browser without server uploads, improving privacy and responsiveness.</p>
        </div>
        <div className="highlight-item">
          <h4>Professional UI</h4>
          <p>Deliberate typography, smooth motion, and adaptive cards ensure the product looks ready for deployment.</p>
        </div>
        <div className="highlight-item">
          <h4>Multi-page structure</h4>
          <p>The website is dynamic and scalable, with Pages for classification, gallery exploration, and project details.</p>
        </div>
        <div className="highlight-item">
          <h4>Future-ready design</h4>
          <p>The architecture supports extending the app with analytics, inventory tracking, and custom model updates.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
