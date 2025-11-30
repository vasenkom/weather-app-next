import NavigationMenuHeader from "@/app/_lib/components/NavigationMenuHeader"
import { WeatherProvider } from "../_lib/context/context"

export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <WeatherProvider>
            <NavigationMenuHeader />
            {children}
        </WeatherProvider>         
    )
}