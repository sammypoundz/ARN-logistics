import SectionWrapper from "../components/SectionWrapper";
import {
  FaFileInvoice,
  FaShip,
  FaGlobeAfrica,
  FaTruckMoving,
  FaWarehouse,
  FaSearchLocation,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Customs Clearance",
      icon: FaFileInvoice,
      desc: "Fast and compliant customs clearance services across Nigerian ports including Apapa, Tin Can, and Onne."
    },
    {
      title: "Freight Forwarding",
      icon: FaShip,
      desc: "Reliable air and sea freight forwarding solutions for imports and exports worldwide."
    },
    {
      title: "Import Documentation",
      icon: FaGlobeAfrica,
      desc: "Professional handling of all import regulatory documentation and approvals."
    },
    {
      title: "Export Handling",
      icon: FaTruckMoving,
      desc: "Secure processing and forwarding of export cargo from Nigeria to global destinations."
    },
    {
      title: "Warehousing",
      icon: FaWarehouse,
      desc: "Safe cargo storage and inventory management solutions before final delivery."
    },
    {
      title: "Cargo Tracking Support",
      icon: FaSearchLocation,
      desc: "Real-time shipment monitoring and client tracking support services."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              Comprehensive logistics solutions tailored to your business needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ title, icon: Icon, desc }) => (
              <SectionWrapper key={title}>
                <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="text-primary text-3xl group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {desc}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to streamline your logistics?
          </h2>
          <p className="mb-6 text-lg">
            Contact us today for a free consultation and competitive quote.
          </p>
          <a
            href="/request-quote"
            className="bg-white text-primary px-8 py-3 rounded-lg inline-block hover:scale-105 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;