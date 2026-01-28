import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import OurServices from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
