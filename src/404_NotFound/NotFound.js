// NotFound.js
import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";

const NotFound = () => {
  return (
    <div className="container mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
