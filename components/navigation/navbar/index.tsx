import { Link } from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/public/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow LOGO"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
