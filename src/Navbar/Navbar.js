import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NavigationButtons() {
  return (
    <div>
      {/* You can delete this from here, this is just here to help */}
      <div className="flex justify-around p-5">
        <Link to="/ourstory" className="text-white font-bold py-2 px-4 ">
          <Button className="rounded-xl">About Us</Button>
        </Link>
        <Link to="/healthservices" className=" text-white font-bold py-2 px-4">
          <Button className="rounded-xl">Health Services</Button>
        </Link>
        <Link to="/donate" className=" text-white font-bold py-2 px-4">
          <Button className="rounded-xl">Donate</Button>
        </Link>
        <Link to="/volunteers" className=" text-white font-bold py-2 px-4 ">
          <Button className="rounded-xl">Volunteers</Button>
        </Link>
      </div>
      {/* To here */}
    </div>
  );
}

export default NavigationButtons;
