function Contact() {
  return (
    <section className="section-card">
      <div className="contact-grid">
        <div className="contact-card glass-panel">
          <div className="hero-eyebrow">Contact</div>
          <h2>Keep your farm technology moving forward.</h2>
          <p className="hero-copy">
            Send a message to request a demo, ask for new features, or get support with image classification workflows.
          </p>
          <div className="highlight-item" style={{ marginTop: '22px' }}>
            <h4>Project details</h4>
            <p>Email: support@animalclassifier.app</p>
            <p>Platform: React / Vite / TensorFlow.js</p>
          </div>
        </div>

        <div className="contact-card">
          <form className="contact-form">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="Message" required />
            <button className="button-primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
