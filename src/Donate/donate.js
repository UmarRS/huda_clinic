import { Button } from "@/components/ui/button";
import React from "react";
import HudaGarden from "./huda_garden_logo.jpg";
import HudaBuilding from "./hudaBuilding.png";
import header from "./header.jpg";
const Donate = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Donate</h2>
          <p className="text-lg text-white">
            Support our mission by donating to the clinic or the urban garden
          </p>
        </div>
      </section>
      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-20">
        <div class="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          <div class="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer">
            <a
              href="https://secure.lglforms.com/form_engine/s/jFcQsAieU-KIYVy9iypVTg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={HudaGarden}
                alt="Clinic"
                class="mb-4 h-[200px] w-full rounded-md object-cover object-center"
              />
              <h2 class="text-2xl font-bold">Donate to the Clinic</h2>
              <p class="mt-2 text-muted-foreground">
                Your donation will help us provide high-quality medical care to
                those in need.
              </p>
              <Button class="mt-4 py-2 px-4 rounded">Donate to Clinic</Button>
            </a>
          </div>
          <div class="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer">
            <a
              href="https://secure.lglforms.com/form_engine/s/1mlSVVsqK9ik2Fzy08kS8g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={HudaBuilding}
                alt="Garden"
                class="mb-4 h-[200px] w-full rounded-md object-cover object-center"
              />
              <h2 class="text-2xl font-bold">Donate to the Garden</h2>
              <p class="mt-2 text-muted-foreground">
                Your donation will help us maintain and expand our beautiful
                community garden.
              </p>
              <Button class="mt-4  py-2 px-4 rounded-2xl">
                Donate to Garden
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;
