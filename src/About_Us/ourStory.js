

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hiDQAT8GiDj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="full=width-container">
      <div className="relative">
        <img
          src="/placeholder.svg"
          alt="Banner"
          width={1200}
          height={400}
          className="w-full h-[24rem] object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-white">About Huda Clinic</h1>
          <p className="text-lg font-serif italic font-bold text-white">
            Our mission is to provide the best healthcare services to our community.
          </p>
        </div>
      </div>
      <header className="mb-12 text-center relative">
        <img
          src="/placeholder.svg"
          alt="Banner"
          width={1200}
          height={400}
          className="absolute inset-0 z-[-1] object-cover w-full h-full rounded-xl"
        />
      </header>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Story</h2>
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="Our Story"
            className="w-full md:w-1/2 mb-4 border-2 border-gray-300 rounded-xl"
          />
          <p className="text-lg text-gray-700 text-center">
            Huda Clinic was founded in 2005 with the aim of providing high-quality healthcare services to the
            underserved population. Over the years, we have grown to become a trusted name in the community, offering a
            wide range of medical services.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="Our Story"
            className="w-full md:w-1/2 mb-4 border-2 border-gray-300 rounded-xl"
          />
          <p className="text-lg text-gray-700 text-center">
            Huda Clinic was founded in 2005 with the aim of providing high-quality healthcare services to the
            underserved population. Over the years, we have grown to become a trusted name in the community, offering a
            wide range of medical services.
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row mb-12">
        <section className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Our Facilities</h2>
          <img
            src="/placeholder.svg"
            alt="Our Facilities"
            className="w-full mb-4 border-2 border-gray-300 rounded-xl"
          />
          <p className="text-lg text-gray-700">
            At Huda Clinic, we pride ourselves on our state-of-the-art facilities, equipped with the latest medical
            technology to ensure our patients receive the best possible care.
          </p>
        </section>
        <section className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <img src="/placeholder.svg" alt="Our Values" className="w-full mb-4 border-2 border-gray-300 rounded-xl" />
          <p className="text-lg text-gray-700">
            At the core of Huda Clinic are our values of compassion, integrity, and excellence. We strive to uphold
            these values in every aspect of our work, from patient care to community outreach.
          </p>
        </section>
      </div>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Proud Members in Good Standings with:</h2>
        <div className="flex justify-center mb-8">
          <img src="/placeholder.svg" alt="Logo" className="w-48 h-48 mx-4 border-2 border-gray-300 rounded-xl" />
          <img src="/placeholder.svg" alt="Logo" className="w-48 h-48 mx-4 border-2 border-gray-300 rounded-xl" />
          <img src="/placeholder.svg" alt="Logo" className="w-48 h-48 mx-4 border-2 border-gray-300 rounded-xl" />
          <img src="/placeholder.svg" alt="Logo" className="w-48 h-48 mx-4 border-2 border-gray-300 rounded-xl" />
          <img src="/placeholder.svg" alt="Logo" className="w-48 h-48 mx-4 border-2 border-gray-300 rounded-xl" />
          <img src="/placeholder.svg" alt="Logo" className="w-48 h-48 mx-4 border-2 border-gray-300 rounded-xl" />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4">Discover more about Huda Clinic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.088 1.91a1.125 1.125 0 01-.28 1.284l-1.022.85c-.251.207-.38.58-.31.95l.159.79a1.125 1.125 0 01-.694 1.34l-1.489.534a1.125 1.125 0 01-.666.063l-.61-.18c-.25-.115-.572-.027-.796.227l-.99 1.23a1.125 1.125 0 01-1.76.156l-1.01-1.175a1.125 1.125 0 01-.199-.75l.058-.625a1.125 1.125 0 00-.363-.92L9.81 14.44a1.125 1.125 0 01-.44-1.294L9.594 3.94zM3.75 10.5a.75.75 0 00-.75.75v4.19l-.72-.72a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.06 0l1.5-1.5a.75.75 0 00-1.06-1.06l-.72.72V11.25a.75.75 0 00-.75-.75z"
                />
              </svg>
              <h3 className="ml-2 text-2xl font-semibold">Partners</h3>
            </div>
            <p className="text-lg text-gray-700">
              Collaborating with various partners to enhance our services and reach.
            </p>
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
                  d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                />
              </svg>
              <h3 className="ml-2 text-2xl font-semibold">Volunteering</h3>
            </div>
            <p className="text-lg text-gray-700">Join our team of volunteers and make a difference in the community.</p>
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
              <h3 className="ml-2 text-2xl font-semibold">Community Outreach</h3>
            </div>
            <p className="text-lg text-gray-700">Engaging with the community through various outreach programs.</p>
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
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              <h3 className="ml-2 text-2xl font-semibold">Education Center</h3>
            </div>
            <p className="text-lg text-gray-700">
              Providing educational resources and training for healthcare professionals.
            </p>
            <a href="#" className="text-blue-500 text-lg">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}