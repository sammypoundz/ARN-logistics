import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate subscription
      console.log("Subscribed:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              ARN Group International
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Reliable clearing and forwarding services across Nigeria and
              international trade routes. We ensure your cargo moves smoothly
              from origin to destination.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary text-gray-400 hover:text-white p-2 rounded-full transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary text-gray-400 hover:text-white p-2 rounded-full transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary text-gray-400 hover:text-white p-2 rounded-full transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary text-gray-400 hover:text-white p-2 rounded-full transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="hover:text-primary transition">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary transition cursor-pointer">
                Customs Clearance
              </li>
              <li className="hover:text-primary transition cursor-pointer">
                Freight Forwarding
              </li>
              <li className="hover:text-primary transition cursor-pointer">
                Warehousing
              </li>
              <li className="hover:text-primary transition cursor-pointer">
                Export Handling
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:info@arngroup.com"
                  className="hover:text-primary transition"
                >
                  info@arngroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                <a
                  href="tel:+2341234567890"
                  className="hover:text-primary transition"
                >
                  +234 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-white font-semibold text-lg">Subscribe to our newsletter</h3>
            <p className="text-gray-400 text-sm mt-1">
              Get the latest updates on shipping and logistics.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 min-w-[200px] px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-5 py-2 rounded-r-lg hover:bg-primary-dark transition flex items-center gap-2"
            >
              <FaPaperPlane />
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-green-400 text-sm md:ml-4">
              ✓ Subscribed successfully!
            </p>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} ARN Group International Co. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;