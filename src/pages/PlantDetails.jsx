import { Link, useParams } from "react-router-dom";
import { plants } from "../data/plantsData";
import "./PlantDetails.scss";

function PlantDetails() {
  const { id } = useParams();

  const plant = plants.find((item) => item.id === Number(id));

  if (!plant) {
    return (
      <div className="plant-details-page">
        <div className="not-found-card">
          <h1>Plant Not Found</h1>
          <p>The plant you are looking for is not available.</p>
          <Link to="/plants">Back to Plants</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="plant-details-page">
      <section className="plant-details-wrapper">
        <div className="details-image-card">
          <div className="details-plant-icon">{plant.icon}</div>
          <span className="limited-badge">Only {plant.stock} left</span>
        </div>

        <div className="details-content-card">
          <p className="details-category">{plant.category}</p>
          <h1>{plant.name}</h1>

          <p className="details-description">{plant.description}</p>

          <div className="price-row">
            <div>
              <span>Price</span>
              <h2>${plant.price}</h2>
            </div>

            <div>
              <span>Care Level</span>
              <h2>{plant.careLevel}</h2>
            </div>
          </div>

          <div className="purpose-box">
            <h3>Purpose</h3>
            <p>{plant.purpose}</p>
          </div>

          <div className="care-grid">
            <div>
              <h4>Light</h4>
              <p>{plant.light}</p>
            </div>

            <div>
              <h4>Water</h4>
              <p>{plant.water}</p>
            </div>

            <div>
              <h4>Humidity</h4>
              <p>{plant.humidity}</p>
            </div>
          </div>

          <div className="details-actions">
            <Link to="/plants" className="back-btn">
              Back to Plants
            </Link>

            <Link to={`/order/${plant.id}`} className="order-now-btn">
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlantDetails;