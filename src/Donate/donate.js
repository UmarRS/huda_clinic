import React from "react";

const Donate = () => {
  return (
    <div className="flex flex-col items-center bg-background px-4 py-12 md:py-24">
      <div className="container max-w-3xl">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Support Our Causes
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Your donation will help us continue our mission of making a positive
            impact in our community. Every contribution counts.
          </p>
          <a
            href="https://secure.lglforms.com/form_engine/s/jFcQsAieU-KIYVy9iypVTg"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mb-4"
          >
            Donate to Our Clinic
          </a>
          <a
            href="https://secure.lglforms.com/form_engine/s/1mlSVVsqK9ik2Fzy08kS8g"
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue disabled:pointer-events-none disabled:opacity-50"
          >
            Donate to Our Garden
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
