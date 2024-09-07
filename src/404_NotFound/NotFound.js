import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">{t("notFound.title")}</h1>
      <p className="text-lg mb-8">{t("notFound.description")}</p>
      <Link to="/" className="text-blue-500">
        {t("notFound.goHome")}
      </Link>
    </div>
  );
};

export default NotFound;
