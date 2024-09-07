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
import { Link } from "react-router-dom";
import header from "./header.jpg";
import { useTranslation } from "react-i18next";

export default function Component() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {t("contact_us")}
          </h2>
        </div>
      </section>

      {/* Contact Info Section */}
      <div className="container mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <PhoneIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">{t("phone")}</h3>
            </div>
            <p className="text-muted-foreground">{t("clinic_phone")}</p>
          </div>

          {/* Address */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <MapPinIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">{t("address")}</h3>
            </div>
            <p className="text-muted-foreground">{t("clinic_address")}</p>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <ClockIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">{t("hours")}</h3>
            </div>
            <p className="text-muted-foreground">
              {t("tuesday_hours")} <br />
              {t("wednesday_hours")} <br />
              {t("thursday_hours")} <br />
              {t("saturday_hours")} <br />
              {t("sunday_hours")}
            </p>
          </div>

          {/* Email */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <MailIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">{t("email")}</h3>
            </div>
            <p className="text-muted-foreground">{t("clinic_email")}</p>
          </div>

          {/* Fax */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <VoicemailIcon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">{t("fax")}</h3>
            </div>
            <p className="text-muted-foreground">{t("clinic_fax")}</p>
          </div>

          {/* Socials */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <h3 className="text-lg font-semibold">{t("socials")}</h3>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HudaClinic/"
                target="_blank"
                className="text-muted-foreground hover:text-primary"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/hudaclinic?lang=en"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/hudaclinic"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/hudaclinic/"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
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
