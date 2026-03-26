import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img src={logo} className="h-10" alt="ARN Logo" />
            <span className="font-semibold text-primary">ARN Group Intl</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-gray-700">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/tracking">Track Shipment</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Desktop Quote Button + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/request-quote"
              className="bg-primary text-white px-5 py-2 rounded-lg transition hover:scale-105"
              onClick={closeMenu}
            >
              Request Quote
            </Link>
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <Link to="/" onClick={closeMenu} className="text-gray-800 hover:text-primary">
            Home
          </Link>
          <Link to="/services" onClick={closeMenu} className="text-gray-800 hover:text-primary">
            Services
          </Link>
          <Link to="/tracking" onClick={closeMenu} className="text-gray-800 hover:text-primary">
            Track Shipment
          </Link>
          <Link to="/contact" onClick={closeMenu} className="text-gray-800 hover:text-primary">
            Contact
          </Link>
          {/* Optional: duplicate quote button inside mobile menu for easier access */}
          <Link
            to="/request-quote"
            onClick={closeMenu}
            className="bg-primary text-white px-8 py-3 rounded-lg mt-4"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;