import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { FaHandshake, FaRocket, FaUsers } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?q=80&w=2070&auto=format')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              About ARN Group International
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              Your trusted partner in clearing, forwarding, and logistics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <SectionWrapper>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  ARN Group International Co. Ltd was established with a vision to revolutionise clearing and forwarding services in Nigeria. With years of industry expertise, we offer end‑to‑end logistics solutions that ensure your cargo moves seamlessly across borders.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our mission is to simplify international trade by combining professional expertise, innovative technology, and unwavering commitment to customer satisfaction.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format"
                  alt="Cargo containers"
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Our Values */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SectionWrapper>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <FaHandshake className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">We conduct business with honesty, transparency, and accountability.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <FaRocket className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for the highest standards in every service we deliver.</p>
              </div>
            </SectionWrapper>
            <SectionWrapper>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <FaUsers className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-gray-600">Your success is our priority; we tailor solutions to your needs.</p>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Optional) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format"
                alt="Cargo ship"
                className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why Choose Us?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">Decades of combined experience in customs clearance and freight forwarding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">Dedicated team ensuring your cargo moves without delays.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">Competitive rates without compromising quality or speed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-600">24/7 support to answer your queries and provide updates.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="mb-6 text-lg">
            Get in touch today and let's make your logistics hassle‑free.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg inline-block hover:scale-105 transition"
          >
            Contact Us Here
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;