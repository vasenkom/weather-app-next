"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWeatherContext } from "./context"
import { useWeather } from "@/app/_lib/hooks/useWeather"

export default async function SSR() {
    const {updateInputState} = useWeatherContext()

    const onSubmit = async (v: any) => {
        updateInputState('city', v) 

        // fetching test
        const data = await useWeather(v);
        console.log("Weather data:", data);
    }

    return (
        <div className="mx-auto w-[80%] mt-4">
            <h1>SSR Weather Dashboard</h1>
                <div className="flex w-full max-w-sm items-center gap-2 mt-4">
                    {/* <form onSubmit={fetchForecast}> */}
                    <form onSubmit={onSubmit}>
                        <Input type="text" placeholder="City" name="city" />
                        <Button type="submit" variant="outline">
                            Get Weather
                        </Button>
                    </form>
                </div>
            <div className="mt-4">
                {/* {JSON.stringify(weatherData)} */}
            </div>
        </div>
    )
}