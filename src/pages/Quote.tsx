import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBox,
  FaMapMarkerAlt,
  FaFlag,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cargoType: "",
    origin: "",
    destination: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation – ensure required fields are filled
    if (!formData.fullName || !formData.email || !formData.origin || !formData.destination) {
      alert("Please fill in all required fields (*).");
      return;
    }
    // Simulate API call
    console.log("Quote request:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      cargoType: "",
      origin: "",
      destination: "",
      details: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              Request a Shipping Quote
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              Tell us about your cargo and we'll get back to you with a competitive rate.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <SectionWrapper>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center md:text-left">
                Shipping Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Two‑column layout for basic info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="+234 123 456 7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cargoType" className="block text-gray-700 font-medium mb-2">
                      Cargo Type
                    </label>
                    <div className="relative">
                      <FaBox className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="cargoType"
                        name="cargoType"
                        value={formData.cargoType}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="e.g., Containers, Machinery, Vehicles"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="origin" className="block text-gray-700 font-medium mb-2">
                      Origin Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="origin"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
                      Destination <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaFlag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-gray-700 font-medium mb-2">
                    Additional Details
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Weight, dimensions, special handling instructions, etc."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg transition w-full md:w-auto"
                >
                  <FaPaperPlane /> Submit Request
                </motion.button>

                {submitted && (
                  <p className="text-green-600 text-center mt-4 font-medium">
                    ✓ Quote request sent! We'll contact you within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
};

export default Quote;