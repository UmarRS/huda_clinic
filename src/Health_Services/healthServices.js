import { useTranslation } from "react-i18next";

// Image imports
import header from "./images/header.jpg";
import servicemain from "./images/servicemain.png";
import dentalservice from "./images/dentalservice.jpg";
import mentalservice from "./images/mentalservice.jpg";
import primaryservice from "./images/primaryservice.jpg";
import specialtyservice from "./images/specialtyservice.jpg";
import visionservice from "./images/visionservice.jpg";

// Shadecn Component imports
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function Component() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-black">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {t("header.title")}
          </h2>
          <p className="text-lg text-white">{t("header.description")}</p>
        </div>
      </section>
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black">
              {t("ourServices.title")}
            </h3>
            <p>{t("ourServices.description")}</p>
            <h3 className="text-2xl font-bold text-black">
              {t("ourServices.findCareTitle")}
            </h3>
            <p>{t("ourServices.findCareDescription")}</p>
          </div>
          <div>
            <img
              src={servicemain}
              alt="Clinic Image"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </section>
      <section className=" py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-black text-center mb-4">
            {t("ourServices.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image={primaryservice}
              title={t("serviceCards.primaryCare.title")}
              description={t("serviceCards.primaryCare.description")}
              services={t("serviceCards.primaryCare.services", {
                returnObjects: true,
              })}
            />
            <ServiceCard
              image={dentalservice}
              title={t("serviceCards.dentalCare.title")}
              description={t("serviceCards.dentalCare.description")}
              services={t("serviceCards.dentalCare.services", {
                returnObjects: true,
              })}
            />
            <ServiceCard
              image={mentalservice}
              title={t("serviceCards.mentalHealth.title")}
              description={t("serviceCards.mentalHealth.description")}
              services={t("serviceCards.mentalHealth.services", {
                returnObjects: true,
              })}
            />
            <ServiceCard
              image={visionservice}
              title={t("serviceCards.visionCare.title")}
              description={t("serviceCards.visionCare.description")}
              services={t("serviceCards.visionCare.services", {
                returnObjects: true,
              })}
            />
            <ServiceCard
              image={specialtyservice}
              title={t("serviceCards.specialtyCare.title")}
              description={t("serviceCards.specialtyCare.description")}
              services={t("serviceCards.specialtyCare.services", {
                returnObjects: true,
              })}
            />
          </div>
        </div>
      </section>
      <section className=" py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-black text-center mb-4">
            {t("newPatientInfo.title")}
          </h3>
          <div className="bg-white p-6 rounded-md border">
            <p>{t("newPatientInfo.description1")}</p>
            <p>{t("newPatientInfo.description2")}</p>
            <h4 className="text-xl font-bold text-black mt-4">
              {t("newPatientInfo.hoursTitle")}
            </h4>
            <ul className="list-disc pl-6 text-left">
              {t("newPatientInfo.hours", { returnObjects: true }).map(
                (hour, index) => (
                  <li key={index}>{hour}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ServiceCard({ image, title, description, services }) {
  const { t } = useTranslation();

  return (
    <Card className="bg-white ">
      <div className="p-6 md:p-8 lg:p-10">
        <div className="h-48 md:h-56 lg:h-64 overflow-hidden rounded-md shadow-md">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-bold text-green-500">{title}</h4>
          <p>{description}</p>
          {/* <h5 className="text-lg font-bold mt-4 mb-2 text-[#4a5568]">
            {t("serviceCards.servicesTitle", { title })}
          </h5> */}
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition">
              <span className="font-medium text-[#4a5568]">
                {t("healthservices_moreinfo")}
              </span>
              <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180 text-blue-400" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="list-disc pl-6 text-left mt-2">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </Card>
  );
}
