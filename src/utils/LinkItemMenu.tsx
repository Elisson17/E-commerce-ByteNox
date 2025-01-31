import Link from "next/link";
import React from "react";

interface LinkItemMenuProps {
  name: string;
  href: string;
}

const LinkItemMenu = ({ name, href }: LinkItemMenuProps) => {
  return (
    <div className="hover:bg-red-300 rounded-md text-xl font-bold ">
      <Link className="p-2" href={href}>
        {name}
      </Link>
    </div>
  );
};

export default LinkItemMenu;
