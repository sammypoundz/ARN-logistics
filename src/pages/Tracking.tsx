import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaBox, FaCheckCircle, FaTruck, FaMapMarkerAlt } from "react-icons/fa";

// Mock demo data for multiple tracking numbers
const demoData: Record<string, any> = {
  ARN123456: {
    id: "ARN123456",
    status: "In Transit",
    origin: "Lagos, Nigeria",
    destination: "Rotterdam, Netherlands",
    estimatedDelivery: "2025-04-10",
    currentLocation: "Port of Tincan",
    history: [
      { date: "2025-03-20", status: "Booking Confirmed", location: "Lagos" },
      { date: "2025-03-22", status: "Received at Warehouse", location: "Lagos" },
      { date: "2025-03-25", status: "Customs Clearance", location: "Lagos" },
      { date: "2025-03-28", status: "Loaded on Vessel", location: "Lagos" },
      { date: "2025-04-01", status: "In Transit", location: "Atlantic Ocean" },
    ],
  },
  ARN789012: {
    id: "ARN789012",
    status: "Delivered",
    origin: "Shanghai, China",
    destination: "Lagos, Nigeria",
    estimatedDelivery: "2025-03-15",
    currentLocation: "Apapa Port",
    history: [
      { date: "2025-03-01", status: "Booking Confirmed", location: "Shanghai" },
      { date: "2025-03-03", status: "Received at Warehouse", location: "Shanghai" },
      { date: "2025-03-05", status: "Loaded on Vessel", location: "Shanghai" },
      { date: "2025-03-10", status: "Arrived at Destination Port", location: "Apapa" },
      { date: "2025-03-12", status: "Customs Clearance", location: "Apapa" },
      { date: "2025-03-14", status: "Out for Delivery", location: "Lagos" },
      { date: "2025-03-15", status: "Delivered", location: "Lagos" },
    ],
  },
  ARN456789: {
    id: "ARN456789",
    status: "Customs Clearance",
    origin: "Houston, USA",
    destination: "Lagos, Nigeria",
    estimatedDelivery: "2025-04-25",
    currentLocation: "Customs Office, Apapa",
    history: [
      { date: "2025-03-25", status: "Booking Confirmed", location: "Houston" },
      { date: "2025-03-27", status: "Received at Warehouse", location: "Houston" },
      { date: "2025-03-30", status: "Loaded on Vessel", location: "Houston" },
      { date: "2025-04-10", status: "Arrived at Destination Port", location: "Apapa" },
      { date: "2025-04-12", status: "Customs Clearance", location: "Apapa" },
    ],
  },
  ARN987654: {
    id: "ARN987654",
    status: "Received at Warehouse",
    origin: "Dubai, UAE",
    destination: "Kano, Nigeria",
    estimatedDelivery: "2025-04-20",
    currentLocation: "Warehouse, Lagos",
    history: [
      { date: "2025-04-01", status: "Booking Confirmed", location: "Dubai" },
      { date: "2025-04-03", status: "Received at Warehouse", location: "Dubai" },
      { date: "2025-04-05", status: "Loaded on Vessel", location: "Dubai" },
      { date: "2025-04-10", status: "Arrived at Destination Port", location: "Lagos" },
      { date: "2025-04-12", status: "Received at Warehouse", location: "Lagos" },
    ],
  },
  ARN321654: {
    id: "ARN321654",
    status: "Delayed",
    origin: "Antwerp, Belgium",
    destination: "Lagos, Nigeria",
    estimatedDelivery: "2025-04-30",
    currentLocation: "Port of Antwerp",
    history: [
      { date: "2025-03-28", status: "Booking Confirmed", location: "Antwerp" },
      { date: "2025-03-30", status: "Received at Warehouse", location: "Antwerp" },
      { date: "2025-04-02", status: "Loaded on Vessel", location: "Antwerp" },
      { date: "2025-04-05", status: "Delayed due to weather", location: "Atlantic Ocean" },
    ],
  },
};

const Tracking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setTrackingId(id);
      fetchTrackingData(id);
    }
  }, []);

  const fetchTrackingData = async (id: string) => {
    setLoading(true);
    setError("");
    setTrackingData(null);

    // Simulate API call delay
    setTimeout(() => {
      const data = demoData[id];
      if (data) {
        setTrackingData(data);
      } else {
        setError("No shipment found with this tracking number.");
      }
      setLoading(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError("Please enter a tracking number.");
      return;
    }
    setSearchParams({ id: trackingId });
    fetchTrackingData(trackingId);
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
              Shipment Tracking
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              Track your cargo in real‑time. Enter your tracking number below.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter tracking number (e.g., ARN123456, ARN789012, ARN456789)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition disabled:opacity-50"
            >
              <FaSearch /> {loading ? "Tracking..." : "Track"}
            </button>
          </form>
          {error && (
            <p className="mt-4 text-red-500 text-center">{error}</p>
          )}
        </div>
      </section>

      {/* Demo Hints */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>Try these demo tracking numbers: <strong>ARN123456</strong>, <strong>ARN789012</strong>, <strong>ARN456789</strong>, <strong>ARN987654</strong>, <strong>ARN321654</strong></p>
        </div>
      </section>

      {/* Results */}
      {trackingData && (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary text-white px-6 py-4">
                <h2 className="text-2xl font-bold">Tracking Details</h2>
                <p className="text-sm opacity-90">Tracking Number: {trackingData.id}</p>
              </div>

              <div className="p-6 border-b">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-100">
                      <FaCheckCircle className="text-green-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Current Status</p>
                      <p className="font-semibold text-lg">{trackingData.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                      <FaMapMarkerAlt className="text-blue-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Origin</p>
                      <p className="font-semibold">{trackingData.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                      <FaMapMarkerAlt className="text-blue-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Destination</p>
                      <p className="font-semibold">{trackingData.destination}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-100">
                      <FaTruck className="text-gray-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Current Location</p>
                      <p className="font-semibold">{trackingData.currentLocation}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm text-gray-500">Est. Delivery</p>
                      <p className="font-semibold">{trackingData.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Shipment History</h3>
                <div className="space-y-4">
                  {trackingData.history.map((event: any, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                        {idx !== trackingData.history.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-300" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm text-gray-500">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!trackingData && !loading && !error && !trackingId && (
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FaBox className="text-6xl text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Enter a tracking number</h2>
            <p className="text-gray-500">
              Use the form above to track your shipment. Your tracking number should have been provided by ARN Group International.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Tracking;