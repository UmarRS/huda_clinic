import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Cookies from "js-cookie";
import { Link } from "../../node_modules/react-router-dom/dist/index";

const DonateSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkCookie = () => {
      const donationHidden = Cookies.get("donationHidden");
      if (donationHidden) {
        const hiddenTimestamp = parseInt(donationHidden, 10);
        const currentTime = new Date().getTime();
        if (currentTime - hiddenTimestamp < 24 * 60 * 60 * 1000) {
          setIsVisible(false);
        } else {
          Cookies.remove("donationHidden");
        }
      }
    };

    checkCookie();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    const currentTime = new Date().getTime();
    Cookies.set("donationHidden", currentTime.toString(), { expires: 1 });
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#113169] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200"
          aria-label="Close donation section"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold text-white mb-4">Help Us Do More</h2>
        <p className="text-xl text-white mb-6">
          Your donation can make a real difference in our community.
        </p>
        <Link to="/donate">
          <Button variant="secondary" size="lg">
            Donate Today
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DonateSection;
