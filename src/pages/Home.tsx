import Hero from "../components/Hero";
import TrackingBar from "../components/TrackingBar";
import ServicesPreview from "../components/ServicesPreview";
import SectionWrapper from "../components/SectionWrapper";
import { FaBolt, FaUserShield, FaHeadset } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Hero />
      <TrackingBar />
      <ServicesPreview />

      {/* About Section (Modernized) */}
      <SectionWrapper>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  About ARN Group International
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  ARN Group International Co. Ltd provides reliable clearing
                  and forwarding services across Nigeria and international
                  trade routes. We specialize in customs clearance, freight
                  forwarding, cargo handling, and documentation support.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team ensures smooth logistics coordination from origin
                  to destination with professionalism and speed.
                </p>
                <div className="mt-8">
                  <a
                    href="/about"
                    className="inline-flex items-center text-primary font-semibold hover:underline"
                  >
                    Learn more about us →
                  </a>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format"
                  alt="Container port logistics"
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px] md:h-[450px]"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Why Choose Us Section (Enhanced) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <SectionWrapper>
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <FaBolt className="text-primary text-4xl mx-auto mb-4" />
              Fast Cargo Processing
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <FaUserShield className="text-primary text-4xl mx-auto mb-4" />
              Experienced Clearance Experts
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <FaHeadset className="text-primary text-4xl mx-auto mb-4" />
              Reliable Client Support
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Need Help Moving Your Cargo?
          </h2>
          <p className="mb-6">
            Request a shipping quote today and let ARN handle your
            logistics professionally.
          </p>
          <a
            href="/request-quote"
            className="bg-white text-primary px-8 py-3 rounded-lg"
          >
            Request Quote
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;