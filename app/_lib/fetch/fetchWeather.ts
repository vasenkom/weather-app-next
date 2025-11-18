// Connection of FE wuth BE, fetching from api, returning data to component
import { useQuery } from "@tanstack/react-query"

export async function fetchWeather(city: string | null) {
    if (!city) throw new Error('No city provided')

    const base = process.env.NEXT_PUBLIC_API_BASE
    const res = await fetch(`${base}/api/SSR?city=${encodeURIComponent(city)}`)
    return res.json()
}

// export function useWeather( city: string | null) {
//     return useQuery({
//         queryKey: ['weather', city],
//         queryFn: () => getWeather(city),
//         staleTime: 1000 * 60 * 5,
//     })
// }