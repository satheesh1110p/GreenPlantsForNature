import { Link } from "react-router-dom";
import "./Plants.scss";

const plants = [
  {
    id: 1,
    name: "Monstera Albo Variegata",
    category: "Premium Indoor Plant",
    purpose:
      "A rare white-green variegated plant used for luxury indoor decoration and collector spaces.",
    price: 249,
    stock: 4,
    careLevel: "Medium",
    icon: "🌿",
  },
  {
    id: 2,
    name: "Monstera Thai Constellation",
    category: "Luxury Collector Plant",
    purpose:
      "Known for cream constellation-like patterns, perfect for premium homes and offices.",
    price: 199,
    stock: 5,
    careLevel: "Medium",
    icon: "🪴",
  },
  {
    id: 3,
    name: "Philodendron Pink Princess",
    category: "High Demand Plant",
    purpose:
      "Famous for pink variegated leaves, adding colorful modern beauty to indoor spaces.",
    price: 179,
    stock: 3,
    careLevel: "Medium",
    icon: "🌱",
  },
  {
    id: 4,
    name: "Anthurium Clarinervium",
    category: "Velvet Leaf Plant",
    purpose:
      "Elegant heart-shaped velvet leaves, useful for office desks and premium interiors.",
    price: 149,
    stock: 6,
    careLevel: "Easy",
    icon: "🍃",
  },
  {
    id: 5,
    name: "Monstera Obliqua",
    category: "Ultra Rare Plant",
    purpose:
      "A collector-level plant with unique leaf holes, perfect for rare plant enthusiasts.",
    price: 399,
    stock: 2,
    careLevel: "Advanced",
    icon: "🌿",
  },
  {
    id: 6,
    name: "Philodendron Gloriosum",
    category: "Decorative Foliage",
    purpose:
      "Large heart-shaped leaves bring a rich tropical look to living rooms and workspaces.",
    price: 129,
    stock: 7,
    careLevel: "Easy",
    icon: "🌱",
  },
  {
    id: 7,
    name: "Alocasia Azlanii",
    category: "Jewel Alocasia",
    purpose:
      "Colorful metallic leaves create a premium decorative impact for small indoor corners.",
    price: 159,
    stock: 4,
    careLevel: "Medium",
    icon: "🪴",
  },
  {
    id: 8,
    name: "Hoya Compacta Variegata",
    category: "Hanging Plant",
    purpose:
      "A beautiful hanging plant with curled leaves, suitable for balconies and window areas.",
    price: 99,
    stock: 8,
    careLevel: "Easy",
    icon: "🌿",
  },
  {
    id: 9,
    name: "Aglaonema Pictum Tricolor",
    category: "Rare Pattern Plant",
    purpose:
      "Camouflage-pattern leaves give a unique, colorful, and highly attractive look.",
    price: 299,
    stock: 3,
    careLevel: "Medium",
    icon: "🍃",
  },
  {
    id: 10,
    name: "Variegated String of Hearts",
    category: "Trailing Plant",
    purpose:
      "A small-space friendly hanging plant with beautiful heart-shaped trailing leaves.",
    price: 89,
    stock: 10,
    careLevel: "Easy",
    icon: "🌱",
  },
];

function Plants() {
  return (
    <div className="plants-page">
      <section className="plants-hero">
        <p className="section-tag">Limited Rare Collection</p>
        <h1>Explore Our 10 Premium Rare Plants</h1>
        <p>
          Each plant is carefully selected for beauty, uniqueness, indoor value,
          and long-term natural impact. Orders are accepted only through this
          website.
        </p>
      </section>

      <section className="plants-grid">
        {plants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <div className="plant-image">
              <span>{plant.icon}</span>
            </div>

            <div className="plant-content">
              <div className="plant-header">
                <h3>{plant.name}</h3>
                <span className="stock-badge">Only {plant.stock} left</span>
              </div>

              <p className="category">{plant.category}</p>
              <p className="purpose">{plant.purpose}</p>

              <div className="plant-meta">
                <span>Care: {plant.careLevel}</span>
                <strong>${plant.price}</strong>
              </div>

              <div className="plant-actions">
                <Link to={`/plants/${plant.id}`} className="details-btn">
                  View Details
                </Link>
                <Link to={`/order/${plant.id}`} className="order-btn">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Plants;