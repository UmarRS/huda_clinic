import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ imageSrc, name }) => {
  return (
    <div className="max-w-xs mx-auto my-4">
      <Link to="/healthservices" className="block group">
        <div className="rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={process.env.PUBLIC_URL + imageSrc}
            alt={name}
          />
          <div className="p-4 text-left">
            <div className="font-semibold text-3xl mb-2 transition-colors duration-300 text-black group-hover:text-custom-purple">
              {name}
            </div>
            <span className="text-5xl transform transition-all duration-300 inline-block group-hover:translate-x-2 text-black group-hover:text-custom-purple">
              &#8594;
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
