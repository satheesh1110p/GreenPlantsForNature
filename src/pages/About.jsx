import "./About.scss";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="section-tag">About This Project</p>
        <h1>GreenNatureForPlants</h1>
        <p>
          GreenNatureForPlants is a full-stack Java portfolio project designed
          for selling rare and high-demand limited plants through an online-only
          ordering portal.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Project Purpose</h2>
          <p>
            The main purpose of this website is to provide a clean, modern, and
            impactful online platform where customers can explore rare plants,
            understand their purpose, check availability, and place orders
            directly from the website.
          </p>
        </div>

        <div className="about-card">
          <h2>Full Stack Concepts Used</h2>
          <ul>
            <li>React JavaScript frontend with reusable components</li>
            <li>React Router for page navigation</li>
            <li>SCSS for component-level styling</li>
            <li>Java Spring Boot backend REST APIs</li>
            <li>Controller, Service, Repository architecture</li>
            <li>Database integration using Spring Data JPA</li>
            <li>Order management and admin dashboard flow</li>
            <li>Git and GitHub version control</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Portfolio Impact</h2>
          <p>
            This project shows practical full-stack development skills including
            UI design, API integration, backend CRUD operations, database-ready
            design, clean project structure, and deployment planning.
          </p>
        </div>
      </section>

      <section className="tech-section">
        <h2>Technology Stack</h2>

        <div className="tech-grid">
          <div>React JS</div>
          <div>JavaScript</div>
          <div>SCSS</div>
          <div>Java</div>
          <div>Spring Boot</div>
          <div>REST APIs</div>
          <div>Spring Data JPA</div>
          <div>PostgreSQL / H2</div>
          <div>GitHub</div>
        </div>
      </section>
    </div>
  );
}

export default About;