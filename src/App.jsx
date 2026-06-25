import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PlantDetails from "./pages/PlantDetails";
import Order from "./pages/Order";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/plants/:id" element={<PlantDetails />} />
            <Route path="/order/:plantId" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;