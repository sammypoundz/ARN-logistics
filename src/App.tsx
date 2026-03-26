import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/About"; // import the About page
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<Quote />} />
          <Route path="/tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;