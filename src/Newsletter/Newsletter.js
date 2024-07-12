import { useState } from "react";

const Newsletter = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you might send the email to an API endpoint
    // After successful submission, show the confirmation message
    setShowConfirmation(true);
  };

  return (
    <div className="bg-background text-foreground rounded-xl ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center h-[85vh]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfZbo6Z4AAoFwKNqfGoX6CBPMvx4HnhpqNhJ8sRyRdDsOv7Jw/viewform?embedded=true"
            className="w-full h-full"
            frameborder="0"
          >
            Loading…
          </iframe>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
