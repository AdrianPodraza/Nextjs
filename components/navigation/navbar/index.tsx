import Image from "next/image";
import Link from "next/link";
import React from "react";
<<<<<<< HEAD

import { auth } from "@/auth";
import UserAvatar from "@/components/UserAvatar";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = async () => {
  const session = await auth();

=======
import Theme from "./Theme";

const Navbar = () => {
>>>>>>> 21e33c2bf0632d7f5fc0629fec692345c93325fc
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />
<<<<<<< HEAD

        {session?.user?.id && (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            imageUrl={session.user?.image}
          />
        )}

        <MobileNavigation />
=======
>>>>>>> 21e33c2bf0632d7f5fc0629fec692345c93325fc
      </div>
    </nav>
  );
};

export default Navbar;
