import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { plants } from "../data/plantsData";
import "./Order.scss";

function Order() {
  const { plantId } = useParams();
  const navigate = useNavigate();

  const plant = plants.find((item) => item.id === Number(plantId));

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
    notes: "",
  });

  if (!plant) {
    return (
      <div className="order-page">
        <div className="order-not-found">
          <h1>Plant Not Found</h1>
          <p>Please select a valid plant from the plant collection.</p>
          <Link to="/plants">Back to Plants</Link>
        </div>
      </div>
    );
  }

  const totalAmount = plant.price * Number(formData.quantity);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      id: Date.now(),
      plantId: plant.id,
      plantName: plant.name,
      customerName: formData.customerName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      quantity: Number(formData.quantity),
      amount: totalAmount,
      notes: formData.notes,
      status: "Pending",
      orderDate: new Date().toLocaleString(),
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("greenNatureOrders")) || [];

    localStorage.setItem(
      "greenNatureOrders",
      JSON.stringify([...existingOrders, newOrder])
    );

    alert("Order placed successfully!");
    navigate("/admin");
  };

  return (
    <div className="order-page">
      <section className="order-hero">
        <p className="section-tag">Online Order Only</p>
        <h1>Place Your Plant Order</h1>
        <p>
          Complete your order details below. This project currently stores
          orders in browser local storage. Later, it can be connected to Java
          Spring Boot backend APIs.
        </p>
      </section>

      <section className="order-wrapper">
        <div className="order-summary-card">
          <div className="order-plant-icon">{plant.icon}</div>

          <h2>{plant.name}</h2>
          <p className="plant-category">{plant.category}</p>
          <p className="plant-purpose">{plant.purpose}</p>

          <div className="summary-row">
            <span>Price</span>
            <strong>${plant.price}</strong>
          </div>

          <div className="summary-row">
            <span>Available Stock</span>
            <strong>{plant.stock}</strong>
          </div>

          <div className="summary-row">
            <span>Care Level</span>
            <strong>{plant.careLevel}</strong>
          </div>

          <div className="summary-total">
            <span>Total Amount</span>
            <strong>${totalAmount}</strong>
          </div>
        </div>

        <form className="order-form-card" onSubmit={handleSubmit}>
          <h2>Customer Details</h2>

          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            placeholder="Enter your full name"
            value={formData.customerName}
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

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Delivery Address</label>
          <textarea
            name="address"
            placeholder="Enter your delivery address"
            rows="4"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            min="1"
            max={plant.stock}
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <label>Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Any special notes for this order"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

          <div className="form-actions">
            <Link to="/plants">Cancel</Link>
            <button type="submit">Place Order</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Order;