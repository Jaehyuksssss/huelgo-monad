import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import type { IconType } from "react-icons";
import { FaCode, FaFeatherAlt, FaHome, FaRocket, FaUser } from "react-icons/fa";


type NavItemProps = {
    href: string;
    label: string;
    icon: IconType;
  };

  const navigations: NavItemProps[] = [
    {
      href: "/",
      label: "Home",
      icon: FaHome,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: FaRocket,
    },
    {
      href: "/blog",
      label: "Blog",
      icon: FaFeatherAlt,
    },
    {
      href: "/snippets",
      label: "Snippets",
      icon: FaCode,
    },
    {
      href: "/about",
      label: "About",
      icon: FaUser,
    },
  ];

const Navigation = () => {
    return (
     <>
     {navigations.map((nav)=>{
        return <div>{nav.label}</div>
     })}
     </>

    );
};

export default Navigation