import Image from "next/image";
import Logo from "../public/images/logo_dark.png";
import ContactIcons from "./ContactIcons";

export default function NavBar() {
  return (
    <header className="w-full portrait:max-w-4xl max-w-5xl pt-[3vh] lg:pt-[5vh] portrait:px-[1.5rem]">
      <div className="flex justify-between items-center">
        <Image
          src={Logo}
          alt=".JB Logo"
          className="h-[2.5rem] w-[2.5rem] hvr-pulse"
          priority
        />
        <ContactIcons />
      </div>
    </header>
  );
}
