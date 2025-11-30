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
    <div className="border-b h-10">
      <div className="w-[80%] mx-auto flex items-center justify-between">
            
            {/* LEFT */}
            <Link href="/">Home</Link>

            {/* RIGHT */}
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                        <Link href="/CSR">CSR</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="ml-10">
                        <NavigationMenuLink asChild>
                        <Link href="/SSR">SSR</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            
      </div>
    </div>
  )
}
