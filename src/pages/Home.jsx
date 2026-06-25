import { Link } from "react-router-dom";
import "./Home.scss";
function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="tagline">Rare • Limited • Naturally Beautiful</p>

          <h1>
            Welcome to <span>GreenNatureForPlants</span>
          </h1>

          <p className="hero-description">
            Discover rare and high-demand limited plants carefully selected for
            indoor beauty, natural freshness, and long-term value. Customers can
            explore premium plants and place orders only through this website.
          </p>

          <div className="hero-buttons">
            <Link to="/plants" className="primary-btn">
              Explore Rare Plants
            </Link>

            <Link to="/about" className="secondary-btn">
              About Project
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <h2>Limited Collection</h2>
          <p>Only 10 premium rare plants available</p>
          <div className="plant-preview">🌿 🌱 🪴</div>
          <span>Order Online Only</span>
        </div>
      </section>

      <section className="features-section">
        <h2>Why GreenNatureForPlants?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Rare Plants</h3>
            <p>
              Carefully selected unique plants with high demand and limited
              availability.
            </p>
          </div>

          <div className="feature-card">
            <h3>Online Ordering</h3>
            <p>
              Customers can view plant details and place orders directly through
              the website.
            </p>
          </div>

          <div className="feature-card">
            <h3>Full Stack Project</h3>
            <p>
              Built using React JavaScript frontend and Java Spring Boot backend
              REST APIs.
            </p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>
          Designed and Developed by <strong>Satheesh</strong> | Full Stack Java
          Developer
        </p>
      </footer>
    </div>
  );
}

export default Home;