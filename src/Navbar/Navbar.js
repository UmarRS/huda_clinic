import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { ChevronDownIcon, CircleUser, MoveRight, MenuIcon } from "lucide-react";
import HUDA_LOGO from "../logo.png";
import { Separator } from "@/components/ui/separator";

function NavigationButtons() {
  const { t } = useTranslation();

  return (
    <header className="w-full bg-white dark:bg-gray-900 mt-5">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 mb-5">
        <div className="flex items-center space-x-4 gap-10">
          <Link to="/" className="flex items-center space-x-4" prefetch={false}>
            <img src={HUDA_LOGO} alt="Huda Clinic Logo" className="ml-2 h-12" />
          </Link>

          <div className="hidden items-start space-x-4 md:flex gap-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-stretch gap-1 text-gray-900 flex-grow hover:text-blue-600 relative group">
                <div className="flex flex-col items-start">
                  <span>{t("navbar.about.title")}</span>
                  <span>{t("navbar.about.subtitle")}</span>
                  <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
                </div>
                <ChevronDownIcon className="self-end mt-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/ourstory" prefetch={false}>
                    {t("navbar.about.ourHistory")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/ourteam" prefetch={false}>
                    {t("navbar.about.ourTeam")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/ourmission" prefetch={false}>
                    {t("navbar.about.ourMission")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/healthservices"
              className="text-gray-900 flex-grow hover:text-blue-600 relative group"
              prefetch={false}
            >
              <div className="flex flex-col items-start">
                <span>{t("navbar.our")}</span>
                <span>{t("navbar.services")}</span>

                <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
              </div>
            </Link>

            <Link
              to="/newsletter"
              className="text-gray-900 flex-grow hover:text-blue-600 relative group"
              prefetch={false}
            >
              <div className="flex flex-col items-start">
                <span>{t("navbar.newsletter.join")}</span>
                <span>{t("navbar.newsletter.newsletter")}</span>
                <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
              </div>
            </Link>
            <Link
              to="/contactus"
              className="text-gray-900 flex-grow hover:text-blue-600 relative group"
              prefetch={false}
            >
              <div className="flex flex-col items-start">
                <span>{t("navbar.contactUs.contact")}</span>
                <span>{t("navbar.contactUs.us")}</span>
                <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
              </div>
            </Link>
            <Link
              to="/donate"
              className="flex-grow relative group"
              prefetch={false}
            >
              <div className="flex flex-col items-start">
                <span>{t("navbar.donate")}</span>
                <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="https://myidentity.platform.athenahealth.com/oauth2/auset0ja9xZ2Hniep296/v1/authorize?client_id=0oa5jhhy36lw4YE6S297&code_challenge=hTrrUBbWg2hLCdDO_YJgoF5Fe1l_jWLWho1hfMqdhgQ&code_challenge_method=S256&nonce=wCxdlkTCdLDcjn8UlnAinNshGyZbiyBM2n88jgEl2ccRd6z6za3ieIFMRpxpJW8s&redirect_uri=https%3A%2F%2Fpxppapp.px.athena.io%2Flogin&response_type=code&state=1fKQ39lghHEoQ2ibzuuFUfJ6yZqht7iYuYaIcbQUW0rFClIRad8zlSBCuBSMGpt6&scope=openid%20email%20communicator.external_accounts.read"
            target="_blank"
            className="text-gray-900 flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            {t("navbar.patientPortal")}
          </a>
          <Link
            to="/newpatient"
            className="inline-flex h-9 items-center flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            <CircleUser className="mr-1" />
            {t("navbar.newPatients")}
          </Link>
        </div>

        {/* Small screen navigation */}
        <div className="md:hidden">
          <Sheet className="text-left justify-left w-full h-[calc(100vh-4rem)]">
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl">
                <MenuIcon className="h-6 w-6 text-gray-900 dark:text-gray-50 rounded-xl" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-white h-[100vh]">
              <div className="grid p-4">
                <SheetClose asChild>
                  <Link
                    to="/ourstory"
                    className="flex items-center text-2xl justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  >
                    <Button
                      className="bg-white text-2xl text-black w-full text-left justify-start hover:bg-blue-100"
                      type="submit"
                    >
                      {t("navbar.about.ourHistory")}
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/ourteam"
                    className="flex items-center text-2xl justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  >
                    <Button
                      className="bg-white text-2xl text-black w-full text-left justify-start hover:bg-blue-100"
                      type="submit"
                    >
                      {t("navbar.about.ourTeam")}
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/ourmission"
                    className="flex items-center text-2xl justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  >
                    <Button
                      className="bg-white text-2xl text-black w-full text-left justify-start hover:bg-blue-100"
                      type="submit"
                    >
                      {t("navbar.about.ourMission")}
                    </Button>
                  </Link>
                </SheetClose>
                <Link
                  to="/healthservices"
                  className="text-black text-2xl text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  prefetch={false}
                >
                  <SheetClose asChild>
                    <Button
                      className="bg-white text-2xl text-black w-full text-left justify-start hover:bg-blue-100"
                      type="submit"
                    >
                      {t("navbar.ourServices")}
                    </Button>
                  </SheetClose>
                </Link>
                <Link
                  to="/donate"
                  className="text-black text-left justify-start hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  prefetch={false}
                >
                  <SheetClose asChild>
                    <Button
                      className="bg-white text-2xl text-black justify-start w-full text-left hover:bg-blue-100"
                      type="submit"
                    >
                      {t("navbar.giveToClinic")}
                    </Button>
                  </SheetClose>
                </Link>
                <Link
                  to="/newsletter"
                  className="text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  prefetch={false}
                >
                  <SheetClose asChild>
                    <Button
                      className="bg-white text-2xl text-black justify-start w-full text-left hover:bg-blue-100"
                      type="submit"
                    >
                      {t("navbar.newsletter.newsletter")}
                    </Button>
                  </SheetClose>
                </Link>

                <SheetClose asChild>
                  <Button
                    href="https://myidentity.platform.athenahealth.com/oauth2/auset0ja9xZ2Hniep296/v1/authorize?..."
                    target="_blank"
                    className="bg-white text-2xl text-black w-full text-left hover:bg-blue-100 justify-start"
                    type="submit"
                  >
                    {t("navbar.patientPortal")}
                    <MoveRight className="ml-2" />
                  </Button>
                </SheetClose>
                <SheetClose>
                  <div className="bg-white text-2xl text-black w-full text-left hover:bg-blue-100 justify-start">
                    <Button
                      target="_blank"
                      className="bg-white text-2xl text-black w-full text-left hover:bg-blue-100 justify-start"
                      type="submit"
                    >
                      <CircleUser className="mr-1" />
                      {t("navbar.newPatients")}
                      <MoveRight className="ml-2" />
                    </Button>
                  </div>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <Separator />
    </header>
  );
}

export default NavigationButtons;
