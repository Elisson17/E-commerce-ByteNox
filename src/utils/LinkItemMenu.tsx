import Link from "next/link";
import React from "react";

interface LinkItemMenuProps {
  name: string;
  href: string;
}

const LinkItemMenu = ({ name, href }: LinkItemMenuProps) => {
  return (
    <div className="hover:bg-red-700 p-2 rounded-md text-xl font-bold ">
      <Link className="p-4" href={href}>
        {name}
      </Link>
    </div>
  );
};

export default LinkItemMenu;
