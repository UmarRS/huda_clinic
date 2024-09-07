import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import HudaGarden from "./huda_garden_logo.jpg";
import HudaBuilding from "./hudaBuilding.png";
import header from "./header.jpg";

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {t("donate_header.title")}
          </h2>
          <p className="text-lg text-white">{t("donate_header.description")}</p>
        </div>
      </section>
      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-20">
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer">
            <a
              href="https://secure.lglforms.com/form_engine/s/jFcQsAieU-KIYVy9iypVTg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={HudaBuilding}
                alt="Clinic"
                className="mb-4 h-[200px] w-full rounded-md object-cover object-center"
              />
              <h2 className="text-2xl font-bold">
                {t("donate_options.clinic.title")}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {t("donate_options.clinic.description")}
              </p>
              <Button className="mt-4 py-2 px-4 rounded">
                {t("donate_options.clinic.buttonText")}
              </Button>
            </a>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer">
            <a
              href="https://secure.lglforms.com/form_engine/s/1mlSVVsqK9ik2Fzy08kS8g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={HudaGarden}
                alt="Garden"
                className="mb-4 h-[200px] w-full rounded-md object-cover object-center"
              />
              <h2 className="text-2xl font-bold">
                {t("donate_options.garden.title")}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {t("donate_options.garden.description")}
              </p>
              <Button className="mt-4 py-2 px-4 rounded-2xl">
                {t("donate_options.garden.buttonText")}
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;
