"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWeatherContext } from "./context"
import { fetchWeather } from "@/app/_lib/fetch/fetchWeather"
import { useState } from "react"
import Cards from "@/app/_lib/components/Cards"

export default function SSR() {
    const {updateInputState} = useWeatherContext()
    const [currentWeather, setCurrentWeather] = useState<any>(null);
    const [forecastWeather, setForecastWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const city = currentWeather?.location?.name || null
    const country = currentWeather?.location?.country || null
    const currentTemperature = currentWeather?.current?.temp_c || null
    const feelsLike = currentWeather?.current?.feelslike_c || null
    const condition = currentWeather?.current?.condition?.text || null
    const conditionIcon = currentWeather?.current?.condition?.icon || null
    const precip_mm = currentWeather?.current?.precip_mm || null
    const wind_kph = currentWeather?.current?.wind_kph || null
    const wind_dir = currentWeather?.current?.wind_dir || null

    const tomorrowDate = forecastWeather?.forecast?.forecastday?.[1]?.date || null;
    const tomorrowTempMax = forecastWeather?.forecast?.forecastday?.[1]?.day?.maxtemp_c || null;
    const tomorrowTempMin = forecastWeather?.forecast?.forecastday?.[1]?.day?.mintemp_c || null;

    const futureDate = forecastWeather?.forecast?.forecastday?.[2]?.date || null;
    const futureTempMax = forecastWeather?.forecast?.forecastday?.[2]?.day?.maxtemp_c || null;
    const futureTempMin = forecastWeather?.forecast?.forecastday?.[2]?.day?.mintemp_c || null;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        //FormData allows to read inputs from form; strores key-value pairs
        const city = (new FormData(e.currentTarget).get("city") as string)
        updateInputState('city', city) 

        const data = await fetchWeather(city);

        if (data.error) {
            setError(data.error);
            setCurrentWeather(null);
            setForecastWeather(null);
            return;
        }

        setCurrentWeather(data.current);
        setForecastWeather(data.forecast);
    }

    return (
        <div className="mx-auto w-[80%] mt-4">
            <h1>SSR Weather Dashboard</h1>
            <div className="flex flex-col items-start w-full max-w-sm items-center gap-2 mt-4">
                <form onSubmit={onSubmit} className="flex gap-2">
                    <Input type="text" placeholder="City" name="city" />
                    <Button type="submit" variant="outline">
                        Get Weather
                    </Button>
                </form>
                {error && (
                    <p className="text-red-500 text-sm mt-2">
                        {error}
                    </p>
                )}
            </div>
            <div className={currentWeather ? "mt-4" : "hidden mt-4"}>
                <h1><span className="font-semibold">{city}</span>, {country}</h1>
                <h2 className="mt-3">Current conditions:</h2>
                <div className="mt-2 flex wrap gap-2">
                    <Cards text={`${currentTemperature}°`} description={`Feels like ${feelsLike}°`}/>
                    <Cards text={
                        <div className="flex items-center gap-2">
                            <img
                                src={`https:${conditionIcon}`}
                                alt={condition}
                                className="w-6 h-6"
                            />
                            <span>{condition}</span>
                        </div>
                    }
                    description={`${precip_mm} mm`}
                    />
                    <Cards text={`${wind_kph}km/h, ${wind_dir}`}/>
                </div>
                <div className={forecastWeather ? "mt-4" : "hidden mt-4"}>
                    <h2 className="mt-3">Weather forecast:</h2>
                    <div className="mt-2 flex wrap gap-2">
                        <Cards text={`Tomorrow, ${tomorrowDate}`} description={`${tomorrowTempMax}° / ${tomorrowTempMin}° `}/>
                        <Cards text={`${futureDate}`} description={`${futureTempMax}° / ${futureTempMin}° `}/>
                    </div>
                </div>
            </div>
        </div>
    )
}