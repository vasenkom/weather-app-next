export async function useWeather(city: string) {
    if (!city) throw new Error('No city provided')

    const base = process.env.NEXT_PUBLIC_API_BASE
    const res = await fetch(`${base}/api/SSR?city=${encodeURIComponent(city)}`)
    return res.json()
}