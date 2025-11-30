// Connection of FE wuth BE, fetching from api, returning data to component

export async function fetchWeather(city: string | null) {
    if (!city) throw new Error('No city provided')

    const base = process.env.NEXT_PUBLIC_API_BASE
    const res = await fetch(`${base}/api?city=${city}`)
    return res.json()
}
