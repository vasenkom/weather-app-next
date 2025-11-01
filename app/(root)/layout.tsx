import NavigationMenuHeader from "@/app/_lib/components/NavigationMenuHeader"
import { WeatherProvider } from "./SSR/context"

export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <WeatherProvider>
            <NavigationMenuHeader />
            {children}
        </WeatherProvider>         
    )
}