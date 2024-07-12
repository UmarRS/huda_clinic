import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronDown, ChevronRightIcon } from "lucide-react";
import HUDA_LOGO from "../logo.png";
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
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CircleUser } from "lucide-react";
import { MoveRight } from "lucide-react";

function NavigationButtons() {
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
                  <span>About</span>
                  <span>Huda Clinic</span>
                  <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
                </div>
                <ChevronDownIcon className="self-end mt-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/ourstory" prefetch={false}>
                    Our History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/volunteers" prefetch={false}>
                    Our Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/ourmission" prefetch={false}>
                    Our Mission
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
                <span>Our</span>
                <span>Services</span>
                <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
              </div>
            </Link>
            <Link
              to="/donate"
              className="text-gray-900 flex-grow hover:text-blue-600 relative group"
              prefetch={false}
            >
              <div className="flex flex-col items-start">
                <span>Give</span>
                <span>to Clinic</span>
                <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
              </div>
            </Link>
            <Link
              to="/newsletter"
              className="text-gray-900 flex-grow hover:text-blue-600 relative group"
              prefetch={false}
            >
              <div className="flex flex-col items-start">
                <span>Join Our</span>
                <span>Newsletter</span>
                <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden items-center space-x-4 md:flex">
          <a
            href="https://myidentity.platform.athenahealth.com/oauth2/auset0ja9xZ2Hniep296/v1/authorize?client_id=0oa5jhhy36lw4YE6S297&code_challenge=73_ufOHvXzZpHSjCP2l8iqfMYO0x8SAogE2TBe6FZgo&code_challenge_method=S256&nonce=JoQ1tNE3NstCrsOY7zGCF2PcuvcyjJQzgCdTKOg0pqLuUTFtQ3glXOcG9idrySEZ&redirect_uri=https%3A%2F%2Fpxppapp.px.athena.io%2Flogin&response_type=code&state=t6SZvaYCIeYZco1d3LnRFkDqz7eG8TziAunvSMUIb2X7zoGukj3jsAowauJjQlk2&scope=openid%20email%20communicator.external_accounts.read"
            target="_blank"
            className="text-gray-900 flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            Patient Portal
          </a>
          <Link
            to="/newpatient"
            className="inline-flex h-9 items-center flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            <CircleUser className="mr-1" />
            New Patients
          </Link>
        </div>
        {/* for small screens */}
        <div className="md:hidden ">
          <Sheet className="text-left justify-left w-full h-[calc(100vh-4rem)] ">
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl">
                <MenuIcon className="h-6 w-6 text-gray-900 dark:text-gray-50 rounded-xl" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-white h-[100vh]">
              <div className="grid p-4 ">
                <Button className="flex items-center text-2xl justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out">
                  About Huda Clinic
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
                <SheetClose asChild>
                  <Link
                    to="/ourstory"
                    className="flex items-center text-2xl justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  >
                    Our Story
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/"
                    className="flex items-center text-2xl justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  >
                    Our Team
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/"
                    className="flex items-center text-2xl justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  >
                    Our Mission
                  </Link>
                </SheetClose>
                <Link
                  to="/healthservices"
                  className="text-black text-2xl	 text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  prefetch={false}
                >
                  <SheetClose asChild>
                    <Button
                      className="bg-white text-2xl	text-2xl	 text-black w-full text-left justify-start hover:bg-blue-100"
                      type="submit"
                    >
                      Our Services
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
                      className="bg-white text-2xl	 text-black justify-start w-full text-left hover:bg-blue-100"
                      type="submit"
                    >
                      Give to Clinic
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
                      className="bg-white text-2xl	 text-black justify-start w-full text-left hover:bg-blue-100"
                      type="submit"
                    >
                      Join Our Newsletter
                    </Button>
                  </SheetClose>
                </Link>

                <SheetClose asChild>
                  <Button
                    href="https://myidentity.platform.athenahealth.com/oauth2/auset0ja9xZ2Hniep296/v1/authorize?client_id=0oa5jhhy36lw4YE6S297&code_challenge=73_ufOHvXzZpHSjCP2l8iqfMYO0x8SAogE2TBe6FZgo&code_challenge_method=S256&nonce=JoQ1tNE3NstCrsOY7zGCF2PcuvcyjJQzgCdTKOg0pqLuUTFtQ3glXOcG9idrySEZ&redirect_uri=https%3A%2F%2Fpxppapp.px.athena.io%2Flogin&response_type=code&state=t6SZvaYCIeYZco1d3LnRFkDqz7eG8TziAunvSMUIb2X7zoGukj3jsAowauJjQlk2&scope=openid%20email%20communicator.external_accounts.read"
                    target="_blank"
                    className="bg-white text-2xl	 text-black w-full text-left hover:bg-blue-100 justify-start"
                    type="submit"
                  >
                    Patient Portal
                    <MoveRight className="ml-2" />
                  </Button>
                </SheetClose>
                <SheetClose>
                  <div className="bg-white text-2xl	 text-black w-full text-left hover:bg-blue-100 justify-start">
                    <Button
                      // href="https://myidentity.platform.athenahealth.com/oauth2/auset0ja9xZ2Hniep296/v1/authorize?client_id=0oa5jhhy36lw4YE6S297&code_challenge=73_ufOHvXzZpHSjCP2l8iqfMYO0x8SAogE2TBe6FZgo&code_challenge_method=S256&nonce=JoQ1tNE3NstCrsOY7zGCF2PcuvcyjJQzgCdTKOg0pqLuUTFtQ3glXOcG9idrySEZ&redirect_uri=https%3A%2F%2Fpxppapp.px.athena.io%2Flogin&response_type=code&state=t6SZvaYCIeYZco1d3LnRFkDqz7eG8TziAunvSMUIb2X7zoGukj3jsAowauJjQlk2&scope=openid%20email%20communicator.external_accounts.read"
                      target="_blank"
                      className="bg-white text-2xl	 text-black w-full text-left hover:bg-blue-100 justify-start"
                      type="submit"
                    >
                      <CircleUser className="mr-1" />
                      New Patients
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
