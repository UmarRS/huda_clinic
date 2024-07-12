import presidentImage from './boardImages/Dr.Tayeb.jpg';
import edImage from './boardImages/TracyWilson.jpg'
import clinicManagerImg from './boardImages/shima nagi.jpg'
import fdImg from './boardImages/Syed hafeez.jpg'
import mdImg from './boardImages/wasfehmusheinesh.jpg'
import coMdImg from './boardImages/adeel khan.jpg'
import secretaryImg from './boardImages/amber hussain.jpg'
import trusteeImg from './boardImages/fatimah stewart.jpg'
import trustee2Img from './boardImages/catherineziyad.jpg'
import trustee3Img from './boardImages/khalid mohammed.jpg'
import trustee4Img from './boardImages/malekmusheinesh.jpg'
import trustee5Img from './boardImages/mitchelshamsud.jpg'
import treasureImg from './boardImages/moqeem syed.jpg'
import dooImg from './boardImages/gabrielleCostello.JPG'

import bcbsImg from './partnerImages/bcbs.png'
import msuchmImg from './partnerImages/msuchm.png'
import cffsmImg from './partnerImages/CFFSM.jpg'
import deltaDentalImg from './partnerImages/deltadental.jpg'
import wsuImg from './partnerImages/wsu.jpg'
import escImg from './partnerImages/elitesmilecenter.png'
import frcImg from './partnerImages/familyRehabCare.png'
import sayClinicImg from './partnerImages/sayClinic.png'
import circleSocksImg from './partnerImages/circleSocks.png'
import iagdImg from './partnerImages/iagd.png'
import michiganMuslimCCImg from './partnerImages/mmcc.png'
import tawheedImg from './partnerImages/tawheedCenter.png'
import theMuslimCenter from './partnerImages/theMuslimCenter.jpg'
import wcccImg from './partnerImages/wcccdLogo.png'
import dmdImg from './partnerImages/detroitMercyDental.png'
import umichImg from './partnerImages/umich.png'
import bcccpImg from './partnerImages/BCCCP-Tri-County.png'
import esaImg from './partnerImages/eyesurgeonsassociates.png'
import lasmImg from './partnerImages/LASMC-Logo.jpg'
import ferndaleImg from './partnerImages/Ferndale_Config1.jpg'
import shoresDiagImg from './partnerImages/shoresDiagnostics.png'
import pcsmImg from './partnerImages/pcardiosp.jpg'
import chamberlainImg from './partnerImages/chamberlain.jpg'
import authorityHealthImg from './partnerImages/authority.jpg'
import matrixHumanServiceImg from './partnerImages/matrix.png'
import accessImg from './partnerImages/accessLogo.png'
import lahcImg from './partnerImages/lahlogo.png'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import banner from './images/banner.jpg';

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
          <h1 className="text-4xl font-bold mb-4 text-center text-white">About Huda Clinic</h1>
          <p className="text-lg font-serif italic font-bold text-white">
            Providing healthcare through our staff and patrons.
          </p>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Board Members and Executive Officers</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={presidentImage}
              width={200}
              height={200}
              alt="Chairman"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-green-600">Chairman</p>
            <p className="text-black">Jukaku Tayeb, MD</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={edImage}
              width={200}
              height={200}
              alt="Executive Director"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Executive Director</p>
            <p className="text-black">Tracy Wilson</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={clinicManagerImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Clinic Manager</p>
            <p className="text-black">Shima Nagi</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={fdImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Financial Director</p>
            <p className="text-black">Syed Hafeez</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={mdImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Medical Director</p>
            <p className="text-black">Wasfeh Musheinesh, MD</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={coMdImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Co-Medical Director</p>
            <p className="text-black">Adeel Khan, DO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={secretaryImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Secretary/Co-Medical Director</p>
            <p className="text-black">Amber Hussain, PA-C</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={trusteeImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Trustee</p>
            <p className="text-black">Fatimah Stewart</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={trustee2Img}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Trustee</p>
            <p className="text-black">Catherine Ziyad M.S.W.</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={trustee3Img}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Trustee</p>
            <p className="text-black">Khalid Mohammed</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={trustee4Img}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Trustee</p>
            <p className="text-black">Malek Musheinesh, PharmD</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={trustee5Img}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Trustee</p>
            <p className="text-black">Mitchel Shamsud-Din</p>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <img
              src={treasureImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Treasurer</p>
            <p className="text-black">Moqeem Syed</p>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <img
              src={dooImg}
              width={200}
              height={200}
              alt="Board Member"
              className="w-3/4 h-auto rounded-[10%] object-cover"
            />
            <p className="mt-2 font-bold text-blue-600">Director of Outreach</p>
            <p className="text-black">Gabrielle Costello, MS4</p>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Previous Board Members</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Usman Master M.D.</p>
            <p className="text-gray-500">Founding Member</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Zahid Sheikh M.D.</p>
            <p className="text-gray-500">Founding Member</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Basel Hakmeh</p>
            <p className="text-gray-500">2018-2020</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Maisha Rahman</p>
            <p className="text-gray-500">2019-2020</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Ghufraan Akram</p>
            <p className="text-gray-500">2012-2021</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Hannan Nashal</p>
            <p className="text-gray-500">2019-2021</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Kesia Escoe</p>
            <p className="text-gray-500">2019-2020</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Sumaiyah Ahmed Sheik</p>
            <p className="text-gray-500">2019-2021</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Nabeel Shahzad</p>
            <p className="text-gray-500">2017-2022</p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-lg font-bold text-black">Luna Nasry</p>
            <p className="text-gray-500">N/A</p>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">Partners</h2>
        <p className="text-gray-500 text-center mb-8">
          We Are Thankful to Our Patrons for Helping Us Provide Free Healthcare to the Metro Detroit Area.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={bcbsImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Blue Cross Blue Shield of Michigan</h3>
            <a href="https://www.bcbsm.com/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
                bcbsm.com
            </a>
            <p className="text-gray-500 mb-2">
            HUDA is proud to announce that it has been a recipient of the Strengthening the Safety Net Grant by Blue Cross Blue
             Shield for six years! This grant recognizes and supports HUDA's dedication to providing
              vital healthcare services to the community.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={msuchmImg} alt="Partner Logo" width={150} height={150} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Michigan State University College of Human Medicine</h3>
            <a href="https://humanmedicine.msu.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            humanmedicine.msu.edu
            </a>
            <a href="https://chmfamilymedicine.msu.edu/residency-networks/providence-residency/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            chmfamilymedicine.msu.edu
            </a>
            <a href="https://chmfamilymedicine.msu.edu/residency-networks/providence-residency/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            networks/providence-residency/
            </a>
            <p className="text-gray-500 mb-2">
            HUDA is a proud community partner of MSU College of Human Medicine as well as the Ascension Providence Family
             Medicine Residency Program. Together, physicians & students from these organizations strive to increase access to
              healthcare.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={msuchmImg} alt="Partner Logo" width={150} height={150} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Michigan State University College of Osteopathic Medicine</h3>
            <a href="https://osteopathicmedicine.msu.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
              com.msu.edu
            </a>
            <p className="text-gray-500 mb-2">
            HUDA has partnered with Michigan State University College of Osteopathic Medicine for years, providing 
            patients with osteopathic manipulative medicine. MSUCOM medical students contribute significantly through
             clinical volunteering and more.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={msuchmImg} alt="Partner Logo" width={150} height={150} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Michigan State University College of Nursing</h3>
            <a href="https://nursing.msu.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            nursing.msu.edu/
            </a>
            <p className="text-gray-500 mb-2">
            Proud clinical partner of Michigan State University's College of Nursing MSN & DNP programs.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={cffsmImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Community Foundation of Southeast Michigan</h3>
            <a href="https://cfsem.org/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            cfsem.org
            </a>
            <p className="text-gray-500 mb-2">
            HUDA is a recipient of the Community Foundation for Southeast Michigan Grant, aimed to expand
             the operations of our dental services and provide access to healthcare through transportation services 
             for HUDA patients. 
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={deltaDentalImg} alt="Partner Logo" width={100} height={100} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Delta Dental</h3>
            <a href="https://www.deltadentalmi.com/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            deltadentalmi.com
            </a>
            <p className="text-gray-500 mb-2">
            HUDA is a recipient of the Brighter Futures Community Grant from Delta Dental, three years in a row!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={wsuImg} alt="Partner Logo" width={150} height={150} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">WSU Pharmacy School</h3>
            <a href="https://applebaum.wayne.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            cphs.wayne.edu
            </a>
            <p className="text-gray-500 mb-2">
            HUDA is proud to host Wayne State University's Pharmacy Students for their community clinical rotations!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={escImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">The Elite Smile Center</h3>
            <a href="https://www.elitesmilecenter.com/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            elitesmilecenter.com
            </a>
            <p className="text-gray-500 mb-2">
            Thank you to Dr. Shakeel Niazi and the folks at the Elite Smile Center for helping start our free dental clinic!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={frcImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Family Rehab Care</h3>
            <a href="https://familyrehabcare.com/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            familyrehabcare.com
            </a>
            <p className="text-gray-500 mb-2">
            Thank you for volunteering your services by providing our patients with modalities for pain management, therapeutic 
            exercises to restore movement/strength, neuromusuclar reeducation, manual therapy, and help them develop home exercise programs!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={sayClinicImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">SAY Clinic</h3>
            <a href="https://saydetroit.org/clinic/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            saydetroitclinic.com
            </a>
            <p className="text-gray-500 mb-2">
            Thank you for helping our female patients with much needed specialty services for free!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={circleSocksImg} alt="Partner Logo" width={160} height={160} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Circle Socks</h3>
            <a href="https://www.circlesocks.com/mens/shaggy-blink-huda" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            circlesocks.com
            </a>
            <p className="text-gray-500 mb-2">
            For every pair of these socks sold, one pair of socks will be donated directly to the homeless population in the Detroit area through the HUDA Clinic.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={iagdImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Islamic Association of Greater Detroit</h3>
            <a href="https://iagd.net/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            iagdmasjid.net
            </a>
            <p className="text-gray-500 mb-2">
            Generous community donor! IAGD sponsor's HUDA Clinic's Pharmacy expenses.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={michiganMuslimCCImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Michigan Muslim Community Council</h3>
            <a href="https://www.mimuslimcouncil.org/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            mimuslimcouncil.com
            </a>
            <p className="text-gray-500 mb-2">
            Generous community donor organization!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={tawheedImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Tawheed Center</h3>
            <a href="https://www.tawheedcenter.org/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            tawheedcenter.org
            </a>
            <p className="text-gray-500 mb-2">
            Generous community donor organization!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={theMuslimCenter} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">The Muslim Center</h3>
            <a href="muslimcenterdetroit.com" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            muslimcenterdetroit.com
            </a>
            <p className="text-gray-500 mb-2">
            HUDA Clinic is a proud partner of The Muslim Center in Detroit.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={wcccImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Wayne County Community College</h3>
            <a href="https://www.wcccd.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.wcccd.edu
            </a>
            <p className="text-gray-500 mb-2">
            HUDA Clinic is a proud partner of Wayne County Community College.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={dmdImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">University of Detroit Mercy Dental</h3>
            <a href="https://dental.udmercy.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            dental.udmercy.edu
            </a>
            <p className="text-gray-500 mb-2">
            HUDA Clinic is a proud partner of Detroit Mercy Dental.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={umichImg} alt="Partner Logo" width={150} height={150} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">University of Michigan</h3>
            <a href="https://pharmacy.umich.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            pharmacy.umich.edu
            </a>
            <a href="https://dent.umich.edu/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            dent.umich.edu
            </a>
            <p className="text-gray-500 mb-2">
            HUDA Clinic is a proud partner of University of Michigan College of Pharmacy and School of Dentistry.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={bcccpImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Breast and Cervical Cancer Control Program - BCCCP</h3>
            <a href="https://bcccp.org/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            BCCCP.org
            </a>
            <p className="text-gray-500 mb-2">
            HUDA Clinic would like to thank the Breast Cervical Cancer Control Program for providing preventative and diagnostic care for our female patients.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={esaImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Eye Surgeons Associates</h3>
            <a href="https://www.eyesurgeonsassoc.com/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.eyesurgeonsassoc.com
            </a>
            <p className="text-gray-500 mb-2">
            HUDA Clinic would like to acknowledge and thank Eye Surgeons and Associates for being our ophthalmology partner 
            since our start and providing much needed specialty eye care for our patients!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={lasmImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Lung, Allergy, Sleep Medicine Center</h3>
            <a href="https://www.thelasmc.com/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.thelasmc.com
            </a>
            <p className="text-gray-500 mb-2">
            A big thanks to Practice Manager Saroja for always working to see HUDA referrals 
            and of course to Dr. Asadullah Mohammed for consulting, and treating HUDA patients at his practice pro Bono
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={ferndaleImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Ferndale Family Pharmacy</h3>
            <a href="https://www.ferndalefamilypharmacy.com/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.ferndalefamilypharmacy.com
            </a>
            <p className="text-gray-500 mb-2">
            Thanks to Ferndale Family Pharmacy for being HUDA Clinic's pharmacy partner and for supporting HUDA's mission!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={shoresDiagImg} alt="Partner Logo" width={150} height={150} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Shores Diagnostics</h3>
            <p className="text-gray-500 mb-2">
            Thanks to Shores Diagnostics for providing ultrasounds for HUDA patients and supporting HUDA’s mission.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={pcsmImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Premiere Cardiovascular Specialists, Michigan</h3>
            <a href="https://sites.google.com/pcs-michigan.com/ver3/home" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.michpcs.com
            </a>
            <p className="text-gray-500 mb-2">
            Thanks to Premier Cardiovascular Specialists for seeing HUDA referrals and supporting HUDA's mission.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={chamberlainImg} alt="Partner Logo" width={250} height={250} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Chamberlain University</h3>
            <a href="https://www.chamberlain.edu/academics/nursing-school/master-of-science-in-nursing" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.chamberlain.edu
            </a>
            <p className="text-gray-500 mb-2">
            Proud clinical partner of Chamberlain University's MSN program.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={authorityHealthImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Authority Health</h3>
            <a href="https://authorityhealth.org/programs-resources/michigan-medicaid/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            authorityhealth.org
            </a>
            <p className="text-gray-500 mb-2">
            A big thank you to Cheryl Porter-Hawkins and Authority Health for providing Medicaid enrollment assistance for HUDA Clinic Patients!
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={matrixHumanServiceImg} alt="Partner Logo" width={160} height={160} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Matrix Health and Human Services</h3>
            <a href="https://www.matrixhumanservices.org/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.matrixhumanservices.org
            </a>
            <p className="text-gray-500 mb-2">
            Proud Community Partner of Matrix Human Services.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={accessImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Access</h3>
            <a href="https://www.accesscommunity.org/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            www.accesscommunity.org
            </a>
            <p className="text-gray-500 mb-2">
            Thanks to ACCESS for funding HUDA's in house Medicaid enrollment assistance program and allowing us to provide 
            MiBridges access to our patients in clinic. 
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
          </div>

          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
            <img src={lahcImg} alt="Partner Logo" width={200} height={200} className="mb-2" />
            <h3 className="text-lg font-bold mb-2">Leaders Advancing and Helping Communities</h3>
            <a href="https://lahc.org/healthy-living/" className="text-blue-500 underline hover:text-blue-700 mb-2" target="_blank" rel="noopener noreferrer">
            lahc.org/healthy-living
            </a>
            <p className="text-gray-500 mb-2">
            Thanks to LAHC for providing nutritional classes and exercise classes for our patient population such as to increase the education in an out-of-clinic setting.
            </p>
            <hr className="w-full border-blue-500 my-4 border-4" />
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <h3 className="ml-2 text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700">Learn about our mission to provide exceptional healthcare services.</p>
            <a href="#" className="text-blue-500 text-lg">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

