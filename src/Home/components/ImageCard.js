import React from "react";
import "../styles/ImageCard.css";
import { Link } from "../../../node_modules/react-router-dom/dist/index";

const ImageCard = ({ imageSrc, name }) => {
  return (
    <div className="max-w-xs mx-auto my-4">
      <div className="rounded-lg overflow-hidden bg-white">
        <img
          className="image w-full h-64 object-cover rounded-lg"
          src={process.env.PUBLIC_URL + imageSrc}
          alt={name}
        />
        <div className="p-4 justify-left text-left">
          <div className="font-semibold text-3xl mb-2">
            <span className="justify-left">{name}</span>
          </div>
          <Link to="/healthservices">
            <span className=" text-5xl hover:text-purple-500">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
