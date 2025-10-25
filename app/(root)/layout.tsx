import NavigationMenuHeader from "@/app/_lib/components/NavigationMenuHeader"

export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <>
            <NavigationMenuHeader />
            {children}
        </>         
    )
}