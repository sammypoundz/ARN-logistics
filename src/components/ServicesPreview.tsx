import SectionWrapper from "./SectionWrapper";
import {
  FaShip,
  FaWarehouse,
  FaFileInvoice,
  FaTruckMoving,
  FaGlobeAfrica,
  FaSearchLocation,
} from "react-icons/fa";

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
    title: "Warehousing",
    icon: FaWarehouse,
    desc: "Safe cargo storage and inventory management solutions before final delivery."
  },
  {
    title: "Export Handling",
    icon: FaTruckMoving,
    desc: "Secure processing and forwarding of export cargo from Nigeria to global destinations."
  },
  {
    title: "Import Documentation",
    icon: FaGlobeAfrica,
    desc: "Professional handling of all import regulatory documentation and approvals."
  },
  {
    title: "Cargo Tracking Support",
    icon: FaSearchLocation,
    desc: "Real-time shipment monitoring and client tracking support services."
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Our Services
        </h2>

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
  );
};

export default ServicesPreview;