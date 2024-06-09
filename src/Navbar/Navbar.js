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
import { ChevronDownIcon, ChevronDown } from "lucide-react";
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
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CircleUser } from "lucide-react";

function NavigationButtons() {
  return (
    <header className="w-full bg-white  dark:bg-gray-900 mt-5">
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
                  {/* Initially hidden, appears on hover */}
                  <Separator className="hidden group-hover:block bg-gray-200 group-hover:bg-blue-600 h-px" />
                </div>
                <ChevronDownIcon className="self-end mt-auto " />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Our History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Our Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
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
            className="text-gray-900  flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            Patient Portal
          </Link>

          <Link
            href="#"
            className="inline-flex h-9 items-center  flex-grow hover:text-blue-600 relative group"
            prefetch={false}
          >
            <CircleUser className="mr-1" />
            New Patients
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl">
                <MenuIcon className="h-6 w-6 text-gray-900 dark:text-gray-50 rounded-xl" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300">
                    About Huda Clinic
                    <ChevronDownIcon className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link to="/ourstory" prefetch={false}>
                        Our Story
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/" prefetch={false}>
                        Our Team
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/" prefetch={false}>
                        Our Mission
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  to="/healthservices"
                  className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                  prefetch={false}
                >
                  <SheetClose asChild>
                    <Button
                      className="bg-transparent text-black "
                      type="submit"
                    >
                      Our Services
                    </Button>
                  </SheetClose>
                </Link>
                <Link to="/donate" prefetch={false}>
                  <SheetClose asChild>
                    <Button
                      className="bg-transparent text-black "
                      type="submit"
                    >
                      Give to Clinic
                    </Button>
                  </SheetClose>
                </Link>
                <Link
                  to="/newsletter"
                  className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                  prefetch={false}
                >
                  <SheetClose asChild>
                    <Button
                      className="bg-transparent text-black "
                      type="submit"
                    >
                      Join Our Newsletter
                    </Button>
                  </SheetClose>
                </Link>
                <Link href="#" prefetch={false}>
                  <SheetClose asChild>
                    <Button className="bg-white text-black " type="submit">
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
