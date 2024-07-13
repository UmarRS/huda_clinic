import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  VoicemailIcon,
} from "lucide-react";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import header from "./header.jpg";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eVYs5CdIada
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Contact Us</h2>
        </div>
      </section>
      <div className="container mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <PhoneIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-muted-foreground">+1 (313) 865-8446</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <MapPinIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <p className="text-muted-foreground">
              13240 Woodrow Wilson St.
              <br />
              Detroit, MI 48238
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <ClockIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Hours</h3>
            </div>
            <p className="text-muted-foreground">
              Tuesday: 8:30 AM – 2:00 PM (limited walk-in/appointments)
              <br />
              Wednesday: 9:00 AM – 12:00 PM (TELEMEDICINE ONLY)
              <br />
              Thursday: 8:30 AM – 2:00 PM (limited walk-in/appointments)
              <br />
              Saturday: 8:30 AM – 2:00 PM (limited walk-in/appointments)
              <br />
              Sunday: Closed
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <MailIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-muted-foreground">info@hudaclinic.org</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <VoicemailIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Fax</h3>
            </div>
            <p className="text-muted-foreground">+1 (313) 865-8474 </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <h3 className="text-lg font-semibold">Socials</h3>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HudaClinic/"
                target="_blank"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/hudaclinic?lang=en"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/hudaclinic"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/hudaclinic/"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
