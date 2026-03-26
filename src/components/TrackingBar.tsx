import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const TrackingBar = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (!trackingId.trim()) return;
    navigate(`/tracking?id=${trackingId}`);
  };

  return (
    <section className="bg-primary py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <div className="relative">
                <FaTruck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your tracking number (e.g., ARN123456)"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                />
              </div>
            </div>
            <motion.button
              onClick={handleTrack}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-8 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-lg transition w-full md:w-auto justify-center"
            >
              <FaSearch /> Track Shipment
            </motion.button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Track your cargo in real-time – enter your unique tracking number above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackingBar;