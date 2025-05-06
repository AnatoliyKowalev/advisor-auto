// "use client";

import Link from "next/link";
import React, { FC } from "react";

import { mainMenu } from "./constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const NavMain: FC = () => {
  // return (
  //   <nav>
  //     {mainMenu.map((item) => (
  //       <Link href={item.url} key={item.url}>
  //         <span>{item.title}</span>
  //       </Link>
  //     ))}
  //   </nav>
  // );

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center">
        {mainMenu.map((item) => {
          return (
            <NavigationMenuItem key={item.url}>
              <NavigationMenuLink
                href={item.url}
                className={navigationMenuTriggerStyle()}
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMain;
