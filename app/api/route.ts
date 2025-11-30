'use server'
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const apiKey = process.env.WEATHER_API_KEY
    try {
        const { searchParams } = new URL(req.url);
        let city = searchParams.get('city')

        if (!city) {
            return NextResponse.json(
                {error: "City name is required"},
                {status: 400}
            )
        }

        let currentUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        let forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

        const [currentRes, forecastRes] = await Promise.all([
            fetch(currentUrl),
            fetch(forecastUrl)
        ])

        if (!currentRes.ok || !forecastRes.ok) {
           
            return NextResponse.json({
                    error: "One of the API calls failed",
                    currentStatus: currentRes.status,
                    forecastStatus: forecastRes.status
                },
                { status: 500 })
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();
        
        return NextResponse.json({ current: currentData, forecast: forecastData}, { status: 200 })
    } catch (err: any) {
        return NextResponse.json({status: 500, error: 'Uknown Error'})
    }
}