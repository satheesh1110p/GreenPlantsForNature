import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>🌿 GreenNatureForPlants</h2>
          <p>
            A full-stack Java portfolio project for rare and high-demand limited
            plants with online-only ordering.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-tech">
          <h3>Tech Stack</h3>
          <p>React JS</p>
          <p>Java Spring Boot</p>
          <p>REST APIs</p>
          <p>GitHub</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Designed and Developed by <strong>Satheesh</strong> | Full Stack Java
          Developer
        </p>
      </div>
    </footer>
  );
}

export default Footer;