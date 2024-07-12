

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import banner from './images/banner.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image2 from './images/image2.jpg';

export default function Component() {
  return (
    <div className="container mx-auto p-8">
      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          width={1200}
          height={400}
          className="w-full h-[24rem] object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-white">Our Mission</h1>
          <p className="text-lg font-serif italic font-bold text-white">
          "Improving the lives of those in need through comprehensive healthcare, education and resources"
          </p>
        </div>
      </div>
      <section className="mt-12">
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={image3}
              alt="Section 1"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-xl md:order-last"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Our History and Mission</h3>
              <h4 className="text-xl font-semibold mb-2">Origins and Expansion</h4>
              <p className="text-lg">
              HUDA Clinic first opened its doors in May 2004 to serve the uninsured population of Detroit, initially 
              funded by the Muslim community of Metro Detroit. From its beginnings at the Muslim Center of Detroit, the 
              clinic relocated to a larger facility on Woodrow Wilson Street, enabling an expansion of services.
              </p>
              <h4 className="text-xl font-semibold mb-2">Comprehensive Services</h4>
              <p className="text-lg">
              Originally providing only medical services, HUDA Clinic now offers dental, vision, podiatry, mental health, and a wide range 
              of specialty services—all at no cost to patients. This expansion has been made possible through the support of donors and volunteers.
              </p>
              <h4 className="text-xl font-semibold mb-2">Mission and Vision</h4>
              <p className="text-lg">
              Our mission is to improve the lives of those in need through comprehensive healthcare, education, and resources. We strive to provide free, quality 
              healthcare to the uninsured and underinsured, with no fees or third-party reimbursements.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={image4}
              alt="Section 2"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Services and Reach</h3>
              <h4 className="text-xl font-semibold mb-2">Diverse Healthcare Services</h4>
              <p className="text-lg">
              HUDA Clinic provides free primary care, dental care, mental health services, vision care, and 
              specialty care. We offer preventative screenings, health assessments, chronic illness management, and referrals to specialists as needed.
              </p>
              <h4 className="text-xl font-semibold mb-2">Community Impact</h4>
              <p className="text-lg">
              Each year, HUDA Clinic provides over 3,500 services to more than 1,200 unique individuals. As the 
              largest free clinic in Michigan, we make a significant impact on the health and well-being of the community.
              </p>
              <h4 className="text-xl font-semibold mb-2">Access and Affordability</h4>
              <p className="text-lg">
              We never charge fees or seek reimbursements from insurance companies or government programs. Instead, our operations are 
              funded by donations from generous supporters, ensuring that our services remain free for those in need.
              </p>

              <div className="flex justify-center mt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white text-blue-500 px-4 py-2 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={image2}
              alt="Section 3"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-xl md:order-last"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Support and Partnerships</h3>
              <h4 className="text-xl font-semibold mb-2">Donor Support</h4>
              <p className="text-lg">
              80% of our annual operating budget is funded through donations from generous individuals and 
              organizations. Every donation, big or small, makes a real difference in the lives of people in Metro-Detroit.
              </p>
              <h4 className="text-xl font-semibold mb-2">Volunteerism and Leadership</h4>
              <p className="text-lg">
              Our success is built on the dedication of physician volunteers and passionate student leaders. Together, they 
              help us achieve our mission and provide high-quality care to our patients.
              </p>
              <h4 className="text-xl font-semibold mb-2">Community Partnerships</h4>
              <p className="text-lg">
              HUDA Clinic is deeply connected to the community through partnerships with homeless shelters, non-profit organizations, religious 
              groups, and local universities. These collaborations enable us to extend our reach and enhance the services we provide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">Discover more about Huda Clinic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:scale-105 hover:bg-blue-100">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 0l7.5 7.5 7.5-7.5"
                />
              </svg>
              <h3 className="ml-2 text-2xl font-semibold">Our History</h3>
            </div>
            <p className="text-lg text-gray-700">Learn about our journey and how we became a leading healthcare provider in the Metro Detroit area.</p>
            <a href="#" className="text-blue-500 text-lg">
              Learn more
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:scale-105 hover:bg-blue-100">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <h3 className="ml-2 text-2xl font-semibold">Our Team</h3>
            </div>
            <p className="text-lg text-gray-700">Get to know the dedicated professionals who make up our team.</p>
            <a href="#" className="text-blue-500 text-lg">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}