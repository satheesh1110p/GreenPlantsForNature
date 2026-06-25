import { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="section-tag">Contact Us</p>
        <h1>Connect with GreenNatureForPlants</h1>
        <p>
          Have questions about rare plants, limited availability, or online
          orders? Send your message using the contact form below.
        </p>
      </section>

      <section className="contact-wrapper">
        <div className="contact-info">
          <h2>Project Contact Details</h2>

          <div className="info-card">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>support@greennatureforplants.com</p>
            </div>
          </div>

          <div className="info-card">
            <span>🌿</span>
            <div>
              <h3>Business Model</h3>
              <p>Online ordering only for rare limited plants.</p>
            </div>
          </div>

          <div className="info-card">
            <span>💻</span>
            <div>
              <h3>Developed By</h3>
              <p>Satheesh | Full Stack Java Developer</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;