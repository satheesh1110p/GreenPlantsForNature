import "./AdminDashboard.scss";

const orders = [
  {
    id: 101,
    customerName: "John Smith",
    plantName: "Monstera Albo Variegata",
    quantity: 1,
    amount: 249,
    status: "Pending",
  },
  {
    id: 102,
    customerName: "Emily Johnson",
    plantName: "Philodendron Pink Princess",
    quantity: 2,
    amount: 358,
    status: "Confirmed",
  },
  {
    id: 103,
    customerName: "Michael Brown",
    plantName: "Alocasia Azlanii",
    quantity: 1,
    amount: 159,
    status: "Packed",
  },
];

function AdminDashboard() {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((total, order) => total + order.amount, 0);
  const pendingOrders = orders.filter((order) => order.status === "Pending").length;

  return (
    <div className="admin-page">
      <section className="admin-hero">
        <p className="section-tag">Admin Dashboard</p>
        <h1>GreenNatureForPlants Order Management</h1>
        <p>
          Manage plant orders, customer requests, limited stock, and order status
          from one dashboard.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>📦</span>
          <h3>{totalOrders}</h3>
          <p>Total Orders</p>
        </div>

        <div className="stat-card">
          <span>💰</span>
          <h3>${totalRevenue}</h3>
          <p>Total Revenue</p>
        </div>

        <div className="stat-card">
          <span>⏳</span>
          <h3>{pendingOrders}</h3>
          <p>Pending Orders</p>
        </div>

        <div className="stat-card">
          <span>🌿</span>
          <h3>10</h3>
          <p>Rare Plants</p>
        </div>
      </section>

      <section className="orders-section">
        <div className="orders-header">
          <h2>Recent Orders</h2>
          <button>Add New Plant</button>
        </div>

        <div className="orders-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Plant</th>
                <th>Qty</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.plantName}</td>
                  <td>{order.quantity}</td>
                  <td>${order.amount}</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;