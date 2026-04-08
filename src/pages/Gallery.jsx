const animalProfiles = [
  {
    title: 'Grass-Fed Cattle',
    description: 'High-quality, pasture-raised cattle with strong body structure and healthy coat appearance.',
    tag: 'Cattle',
    image: 'https://s3.amazonaws.com/grazecart/millersbiodiversityfarm/images/1686239055_6481f74fcc340.jpeg',
  },
  {
    title: 'Water Buffalo',
    description: 'Large water buffalo often used for milk production and traditional farm labor.',
    tag: 'Buffalo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbo50KfdDhVjMu5do_1q5O6in18NXmY_Y8w&s',
  },
  {
    title: 'Spring Calf',
    description: 'Young cattle with bright eyes and strong hooves, ideal for herd growth stage analysis.',
    tag: 'Cattle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcqu2C0VmFDsa79hEH5pd1CXetAVLZNluQQ&s',
  },
  {
    title: 'Premium Dairy Cow',
    description: 'High-quality dairy cattle bred for milk production with excellent udder structure and body condition.',
    tag: 'Cattle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4LKYx3t9wCKfn3DIRuxJB7-biALX_vle8w&s',
  },
  {
    title: 'Jersey Cattle',
    description: 'Smaller breed known for rich, creamy milk production with distinctive facial features.',
    tag: 'Cattle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrg1ARsiz-SIev6XdOZbKRGtTX8ES4aU7uLw&s',
  },
  {
    title: 'Brahman Cross Breed',
    description: 'Hybrid cattle combining heat tolerance and disease resistance with improved meat quality.',
    tag: 'Cattle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdFY-5YkvcrLnuCu_y7XXVghWwboW3V8cLw&s',
  },
];

function Gallery() {
  return (
    <section className="section-card">
      <div className="hero-panel" style={{ gap: '20px' }}>
        <div className="hero-eyebrow">Visual Animal Gallery</div>
        <h2>Modern livestock reference for cattle and buffalo identification.</h2>
        <p className="hero-copy">
          Browse sample profiles and see how classification can support animal monitoring, breed tracking, and smarter farm decisions.
        </p>
      </div>

      <div className="gallery-grid" style={{ marginTop: '28px' }}>
        {animalProfiles.map((card) => (
          <div key={card.title} className="animal-card">
            <img src={card.image} alt={card.title} />
            <div className="animal-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="badge" style={{ marginTop: '18px' }}>{card.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
