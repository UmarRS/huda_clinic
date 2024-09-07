import { useState } from "react";
import { useTranslation } from "react-i18next";
import header from "./header.jpg";

const Newsletter = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you might send the email to an API endpoint
    // After successful submission, show the confirmation message
    setShowConfirmation(true);
  };

  return (
    <div className="bg-background text-foreground rounded-xl ">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {t("newsletter_header.title")}
          </h2>
          <p className="text-lg text-white">
            {t("newsletter_header.description")}
          </p>
        </div>
      </section>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center h-[85vh]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfZbo6Z4AAoFwKNqfGoX6CBPMvx4HnhpqNhJ8sRyRdDsOv7Jw/viewform?embedded=true"
            className="w-full h-full"
            frameBorder="0"
          >
            {t("newsletter_form.loading")}
          </iframe>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
