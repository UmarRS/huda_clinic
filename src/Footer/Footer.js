import { Button } from "@/components/ui/button";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col ">
      <meta name="keywords" content={t("footer.meta.keywords")} />
      <main className="flex-1" />
      <footer className="bg-[#004080] text-white">
        <div className="bg-[#add8e6] py-8">
          <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">{t("footer.supportTitle")}</h2>
              <p className="mt-2">{t("footer.supportText")}</p>
            </div>
            <Link to="/donate">
              <Button className="mt-4 md:mt-0 rounded-full px-12 py-6 bg-orange-500 text-white transition duration-300 ease-in-out hover:scale-105 border-4 border-orange-300">
                {t("footer.donateButton")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="container mx-auto py-8 grid grid-cols-1 gap-4 md:flex md:justify-center md:items-center">
          <Link to="/">{t("footer.home")}</Link>
          <Link to="/donate">{t("footer.donate")}</Link>
          <Link to="/contactus">{t("footer.contactUs")}</Link>
        </div>
        <div className="container mx-auto py-8 flex flex-col items-center md:flex-row md:justify-center">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.youtube.com/@HudaClinicDetroit/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className="w-6 h-6 transition-colors duration-300 hover:text-orange-500" />
            </a>
            <a
              href="https://twitter.com/hudaclinic?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="w-6 h-6 transition-colors duration-300 hover:text-orange-500" />
            </a>
            <a
              href="https://www.facebook.com/HudaClinic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="w-6 h-6 transition-colors duration-300 hover:text-orange-500" />
            </a>
            <a
              href="https://www.linkedin.com/company/hudaclinic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-6 h-6 transition-colors duration-300 hover:text-orange-500" />
            </a>
            <a
              href="https://www.instagram.com/hudaclinic/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-6 h-6 transition-colors duration-300 hover:text-orange-500" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mb-4">
          {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
