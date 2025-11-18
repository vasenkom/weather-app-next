'use server'

import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const apiKey = process.env.WEATHER_API_KEY
    try {
        const { searchParams } = new URL(req.url);
        let city = searchParams.get('city')
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        const res = await fetch(url)

        if (!res.ok) {
            const errorText = await res.text()
            console.log('ERROR:', errorText)
            return NextResponse.json({status: res.status, error: errorText})
        }

        const json = await res.json()
        return NextResponse.json(json, { status: 200 })
    } catch (err: any) {
        return NextResponse.json({status: 500, error: 'Uknown Error'})
    }
}