import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blogs />} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
