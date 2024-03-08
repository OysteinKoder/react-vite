import { Link, Routes, BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductsPage";

import "./App.css";
// Import the react router components here
// Import your different pages here

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <a>
                <Link to="about-page"> About page</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="contact-page"> contact Page </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="products-page"> products page </Link>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="about-page" element={<AboutPage />} />
        <Route path="contact-page" element={<ContactPage />} />
        <Route path="product-page" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
