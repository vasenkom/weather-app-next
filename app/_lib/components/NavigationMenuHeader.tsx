'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

export default function NavigationMenuHeader() {
  return (
    <div className="border-b-1 flex flex-row justify-center h-10">
        <NavigationMenu>
            <NavigationMenuList>
                <div className="flex flex-row justify-between gap-25">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className="flex flex-row gap-5">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/CSR">CSR</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/SSR">SSR</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </div>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}