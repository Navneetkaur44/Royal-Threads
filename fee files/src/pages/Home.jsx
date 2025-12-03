import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Elevate Your Style Without the Commitment</h1>
            <p>Rent designer fashion for any occasion—effortlessly. Look expensive, pay smart.</p>
            <div className="hero-btns">
              <Link to="/collections" className="btn btn-primary">Explore Collections</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>Your Dream Wardrobe, Just 3 Steps Away</h2>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Browse & Reserve</h3>
              <p>Choose from 500+ luxury brands, filter by occasion, size, or style to find your perfect look.</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-box-open"></i>
              </div>
              <h3>Try Before You Rent</h3>
              <p>Get 3 curated outfits delivered to your door. Keep what you love and return the rest!</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Wear, Return, Repeat</h3>
              <p>Free pickup and professional cleaning included. Swap styles as often as you like with our flexible plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections">
        <div className="container">
          <div className="section-title">
            <h2>The Royal Edit: Curated Luxury</h2>
          </div>
          <div className="collections-grid">
            <div className="collection-item">
              <div className="trending-badge">Trending</div>
              <img src="/INDIAN-WEDIDNG-DRESSES-voguebus-story.jpg" alt="Evening Gown" className="collection-img" />
              <div className="collection-overlay">
                <h3>Royal Elegance</h3>
                <p>Graceful lehengas crafted for timeless celebrations</p>
                <Link to="/collections" className="btn btn-primary">Rent from ₹9,999</Link>
              </div>
            </div>
            <div className="collection-item">
              <img src="/EmeraldSharanyaBridalJewellerySet_1.webp" alt="Business Attire" className="collection-img" />
              <div className="collection-overlay">
                <h3>Timeless Adornments</h3>
                <p>Exquisite jewelry sets for your grand occasions</p>
                <Link to="/collections" className="btn btn-primary">Rent from ₹999</Link>
              </div>
            </div>
            <div className="collection-item">
              <div className="trending-badge">New</div>
              <img src="/green_tint_thread_embroidered_sherwani_set-sg130595_2_-1-729x1024.webp" alt="Vacation Wear" className="collection-img" />
              <div className="collection-overlay">
                <h3>Regal Charm</h3>
                <p>Sophisticated sherwanis for your royal moments</p>
                <Link to="/collections" className="btn btn-primary">Rent from ₹9,999</Link>
              </div>
            </div>
            <div className="collection-item">
              <img src="/shutterstock_1040405461.webp" alt="Wedding Guest" className="collection-img" />
              <div className="collection-overlay">
                <h3>Traditional Elegance</h3>
                <p>Step into the wedding season with timeless style</p>
                <Link to="/collections" className="btn btn-primary">Rent from ₹999</Link>
              </div>
            </div>
            <div className="collection-item">
              <img src="/l-intro-1712426415.jpg" alt="Casual Luxury" className="collection-img" />
              <div className="collection-overlay">
                <h3>Timeless Glamour</h3>
                <p>Graceful gowns designed for unforgettable moments</p>
                <Link to="/collections" className="btn btn-primary">Rent from ₹7,999</Link>
              </div>
            </div>
            <div className="collection-item">
              <div className="trending-badge">VIP Only</div>
              <img src="/NARMA-3.jpg" alt="Designer Exclusive" className="collection-img" />
              <div className="collection-overlay">
                <h3>Regal Elegance</h3>
                <p>Opulent gowns crafted for timeless sophistication and royal occasions.</p>
                <Link to="#" className="btn btn-primary">VIP Access Only</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>The Smart Way to Wear Luxury</h2>
          </div>
          <div className="benefits-container">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>No Commitment</h3>
              <p>Own nothing, wear everything. Refresh your wardrobe without the clutter or buyer's remorse.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Stylist-Approved</h3>
              <p>Every piece is hand-selected by our fashion experts to ensure quality, fit, and style.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Eco-Conscious</h3>
              <p>Reduce fashion waste by sharing premium garments. We use sustainable cleaning methods.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Instant Swap</h3>
              <p>Changed your plans? Exchange your rental for something else with just 24 hours notice.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

