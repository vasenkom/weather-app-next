"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWeatherContext } from "./context"
import { fetchWeather } from "@/app/_lib/fetch/fetchWeather"
import { useState } from "react"

export default function SSR() {
    const {updateInputState} = useWeatherContext()
    const [weatherData, setWeatherData] = useState<any>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //FormData allows to read inputs from form; strores key-value pairs

        const city = (new FormData(e.currentTarget).get("city") as string)
        updateInputState('city', city) 

        const data = await fetchWeather(city);
        setWeatherData(data)
    }

    return (
        <div className="mx-auto w-[80%] mt-4">
            <h1>SSR Weather Dashboard</h1>
                <div className="flex w-full max-w-sm items-center gap-2 mt-4">
                    <form onSubmit={onSubmit}>
                        <Input type="text" placeholder="City" name="city" />
                        <Button type="submit" variant="outline">
                            Get Weather
                        </Button>
                    </form>
                </div>
            <div className="mt-4">
                {JSON.stringify(weatherData, null, 2)}
            </div>
        </div>
    )
}