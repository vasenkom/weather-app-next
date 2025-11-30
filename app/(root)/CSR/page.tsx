"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWeatherContext } from "@/app/_lib/context/context"
import { fetchWeather } from "@/app/_lib/fetch/fetchWeather"
import { useState } from "react"
import Cards from "@/app/_lib/components/Cards"
import { Spinner } from "@/components/ui/spinner"
import { useUnits } from "@/app/_lib/components/providers/UnitsProvider"
import { UnitsSwitcher } from "@/app/_lib/components/UnitsSwitch"

export default function CSR() {
    const {updateInputState} = useWeatherContext()
    const [currentWeather, setCurrentWeather] = useState<any>(null);
    const [forecastWeather, setForecastWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)
    const { value } = useUnits()
    const isMetric = value === "Metric"

    const city = currentWeather?.location?.name ?? ""
    const country = currentWeather?.location?.country ?? ""
    const condition = currentWeather?.current?.condition?.text ?? ""
    const conditionIcon = currentWeather?.current?.condition?.icon ?? ""

    const currentTemperature = isMetric ? currentWeather?.current?.temp_c ?? 0 : currentWeather?.current?.temp_f ?? 0
    const feelsLike = isMetric ? currentWeather?.current?.feelslike_c ?? 0 : currentWeather?.current?.feelslike_f ?? 0
    const tempUnit = isMetric ? "°C" : "°F"

    const precip_mm = isMetric ? currentWeather?.current?.precip_mm ?? 0 : currentWeather?.current?.precip_in ?? 0
    const precipUnit = isMetric ? "mm" : "in"

    const wind_speed = isMetric ? currentWeather?.current?.wind_kph ?? 0 : currentWeather?.current?.wind_mph ?? 0
    const windSpeedUnit = isMetric ? "km/h" : "mph"
    const wind_dir = currentWeather?.current?.wind_dir ?? ""

    const tomorrow = forecastWeather?.forecast?.forecastday?.[1]
    const future = forecastWeather?.forecast?.forecastday?.[2]

    const tomorrowDate = tomorrow?.date ?? ""
    const futureDate = future?.date ?? ""
    const tomorrowTempMax = isMetric ? tomorrow?.day?.maxtemp_c ?? 0 : tomorrow?.day?.maxtemp_f ?? 0
    const tomorrowTempMin = isMetric ? tomorrow?.day?.mintemp_c ?? 0 : tomorrow?.day?.mintemp_f ?? 0

    const futureTempMax = isMetric ? future?.day?.maxtemp_c ?? 0 : future?.day?.maxtemp_f ?? 0
    const futureTempMin = isMetric ? future?.day?.mintemp_c ?? 0 : future?.day?.mintemp_f ?? 0

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setLoading(true)

        const form = e.currentTarget 
        const formData = new FormData(e.currentTarget)

        //FormData allows to read inputs from form; strores key-value pairs
        const city = (formData.get("city") as string)
        updateInputState('city', city) 

        if (!city) {
            setError("Please provide the location.")
            setCurrentWeather(null)
            setForecastWeather(null)
            setLoading(false)
            return
        }

        try {
            const data = await fetchWeather(city);

        if (data.error) {
            setError(data.error);
            setCurrentWeather(null);
            setForecastWeather(null);
            return;
        }

        setCurrentWeather(data.current);
        setForecastWeather(data.forecast);
        } catch (err) {
            console.error(err)
            setError("Something went wrong while fetching the weather. Please try again.")
            setCurrentWeather(null)
            setForecastWeather(null)
        } finally {
            setLoading(false)
            form.reset()
        }
        
    }

    return (
        <div className="mx-auto w-[80%] mt-4">
            <h1>CSR Weather Dashboard</h1>
            <UnitsSwitcher />
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
            {loading && (
                <div className="flex items-center justify-center">
                    <Spinner className="size-30" />
                </div>
            )}
            <div className={currentWeather ? "mt-4" : "hidden mt-4"}>
                <h1><span className="font-semibold">{city}</span>, {country}</h1>
                <h2 className="mt-3">Current conditions:</h2>
                <div className="mt-2 flex sm:flex-row gap-2 flex-col">
                    <Cards text={`${currentTemperature}${tempUnit}`} description={`Feels like ${feelsLike}${tempUnit}`}/>
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
                    description={`${precip_mm} ${precipUnit}`}
                    />
                    <Cards text={`${wind_speed} ${windSpeedUnit}, ${wind_dir}`}/>
                </div>
                <div className={forecastWeather ? "mt-4" : "hidden mt-4"}>
                    <h2 className="mt-3">Weather forecast:</h2>
                    <div className="mt-2 flex sm:flex-row gap-2 flex-col">
                        <Cards text={`Tomorrow, ${tomorrowDate}`} description={`${tomorrowTempMax}${tempUnit} / ${tomorrowTempMin}${tempUnit} `}/>
                        <Cards text={`${futureDate}`} description={`${futureTempMax}${tempUnit} / ${futureTempMin}${tempUnit} `}/>
                    </div>
                </div>
            </div>
        </div>
    )
}