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
          <Link
            href="#"
            className="text-gray-900 flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            Patient Portal
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            <CircleUser className="mr-1" />
            New Patients
          </Link>
        </div>
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
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="flex items-center text-2xl	 justify-between w-full bg-white text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out">
                      About Huda Clinic
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-white">
                    <SheetHeader>
                      <SheetTitle className="text-left text-2xl	">
                        About Huda Clinic
                      </SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <SheetClose asChild>
                        <Link
                          to="/ourstory"
                          className="block text-2xl	 px-4 py-2 text-sm text-left hover:bg-blue-100"
                        >
                          Our Story
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          to="/"
                          className="block text-2xl	 px-4 py-2 text-sm text-left hover:bg-blue-100"
                        >
                          Our Team
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          to="/"
                          className="block text-2xl	 px-4 py-2 text-sm text-left hover:bg-blue-100"
                        >
                          Our Mission
                        </Link>
                      </SheetClose>
                    </div>
                  </SheetContent>
                </Sheet>
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
                <Link
                  href="#"
                  className="text-black text-left hover:bg-blue-100 hover:border-b-2 hover:border-blue-600 transition-all duration-200 ease-in-out"
                  prefetch={false}
                >
                  <SheetClose asChild>
                    <Button
                      className="bg-white text-2xl	 text-black w-full text-left hover:bg-blue-100 justify-start"
                      type="submit"
                    >
                      Patient Portal
                    </Button>
                  </SheetClose>
                </Link>
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
