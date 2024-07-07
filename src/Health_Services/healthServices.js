// Note: This page script requires Shadecn installed and its components.

// Image imports
import header from './images/header.jpg'
import servicemain from './images/servicemain.png'
import dentalservice from './images/dentalservice.jpg'
import mentalservice from './images/mentalservice.jpg'
import primaryservice from './images/primaryservice.jpg'
import specialtyservice from './images/specialtyservice.jpg'
import visionservice from './images/visionservice.jpg'

// Shadecn Component imports
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function Component() {
  return (
    <div className="bg-white text-black">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Free Community Health Services</h2>
          <p className="text-lg text-white">
            Improving the lives of those in need through comprehensive healthcare, education and resources
          </p>
        </div>
      </section>
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#4a5568]">Our Services</h3>
            <p>Explore our wide range of healthcare services designed to meet the diverse needs of our community.</p>
            <h3 className="text-2xl font-bold text-[#4a5568]">Find the Care You Need</h3>
            <p>
              Our comprehensive healthcare services are designed to cater to all your medical needs. Explore our
              offerings and discover how we can support your well-being.
            </p>
          </div>
          <div>
            <img src={servicemain} alt="Clinic Image" className="w-full h-auto rounded-md shadow-md" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-[#4a5568] text-center mb-4">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image={primaryservice}
              title="Primary Care"
              description="Primary care providers address general health concerns, offering education, medications, and referrals. HUDA serves uninsured and under-insured individuals in Metro Detroit with preventative care and specialized services. We aim to improve Michigan's health with free medications and no-cost lab services."
              services={[
                'Health Assessments',
                'Acute and Chronic Illness Management',
                'Laboratory Services (blood work)',
                'No Cost Pharmacy',
                'Diabetes Screening & Treatments',
                'Health Education and Resources',
                'Nutrition education',
              ]}
            />
            <ServiceCard
              image={dentalservice}
              title="Dental Care"
              description="Many people delay dental work due to lack of insurance, but small problems can become painful if ignored. Visit HUDA for cleanings, fillings, extractions, and exams to maintain healthy teeth. We also provide referrals to specialists if needed."
              services={[
                'Dental screenings, and X-Rays',
                'Deep Cleanings',
                'Composite Fillings',
                'Tooth Extraction',
                'Referrals to low cost dentists as needed',
              ]}
            />
            <ServiceCard
              image={mentalservice}
              title="Mental Health"
              description="Our psychiatrists and social workers offer free therapy and treatment for veterans, the homeless, uninsured, and underinsured. Since COVID-19, our psychiatry services are via telemedicine. Our volunteer team includes two psychiatrists, a nurse practitioner, and a therapist."
              services={[
                'Prescribing psychiatrist on site',
                'Adult Counseling',
                'Anxiety/Depression',
                'Bipolar Disorders',
                'Eating Disorders',
                'Schizoaffective Disorders, and more',
              ]}
            />
            <ServiceCard
              image={visionservice}
              title="Vision Care"
              description="Vision screenings effectively identify visual impairments or eye conditions that could lead to vision loss. We conduct screenings in-house and offer free eyewear and referrals to affordable local ophthalmologists when needed."
              services={[
                'Glaucoma Screenings',
                'Cataract Screenings',
                'Macular Degeneration Screenings',
                'FREE eye-wear',
                'Referrals to vision specialists',
              ]}
            />
            <ServiceCard
              image={specialtyservice}
              title="Specialty Care"
              description="In medicine, many sub-specialties coordinate patient care. At HUDA, we offer various specialty care and consultations to expand healthcare access. Our integrated health model provides multiple specialty services to meet most patient needs. All specialty services require a referral from a HUDA primary care provider."
              services={[
                'Physical Therapy',
                'Endocrinology',
                'Cardiology',
                'Nephrology',
                'Gastroenterology',
                'Ear, Nose, Throat (ENT)',
                'Hepatology',
                'Hematology',
                'Medication Management Therapy',
                'Pulmonology',
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-[#4a5568] text-center mb-4">New Patient Information</h3>
          <div className="bg-white p-6 rounded-md shadow-md">
            <p>
              New patients are always welcome at the HUDA Clinic! You can schedule your initial appointment by visiting
              our clinic during our regular hours, or you may also come for a walk-in appointment before 10:30 AM, or
              until we reach our capacity on the days we offer walk-ins (see below).
            </p>
            <p>New patients must bring with them a valid photo ID, and must be at least 18 years old.</p>
            <h4 className="text-xl font-bold text-[#4a5568] mt-4">Hours:</h4>
            <ul className="list-disc pl-6 text-left">
              <li>Tuesday: 8:30 AM – 2:00 PM (limited walk-in availability)</li>
              <li>Wednesday: 9:00 AM – 12:00 PM (Telemedicine only)</li>
              <li>Thursday: 8:30 AM – 2:00 PM (limited walk-in availability)</li>
              <li>Saturday: 8:30 AM – 2:00 PM (limited walk-in availability)</li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="bg-[#4a5568] text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Huda Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
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
  )
}

function ServiceCard({ image, title, description, services }) {
  return (
    <Card className="bg-white shadow-md">
      <div className="p-6 md:p-8 lg:p-10">
        <img src={image} alt={title} className="w-full h-auto rounded-md shadow-md" />
        <div className="mt-4">
          <h4 className="text-xl font-bold text-green-500">{title}</h4>
          <p>{description}</p>
          <h5 className="text-lg font-bold mt-4 mb-2 text-[#4a5568]">Our {title} Services Include:</h5>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition">
              <span className="font-medium text-[#4a5568]">View Services</span>
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
  )
}
