export async function getForecast() {
     const base = process.env.NEXT_PUBLIC_API_BASE
    const res = await fetch(`${base}/api/SSR/`)
    return res.json()
}

export default async function SSR() {
    const weatherData = await getForecast()
    return (
        <div className="mx-auto w-[80%] mt-4">
            <h1>SSR Weather Dashboard</h1>
            <div>
                {JSON.stringify(weatherData)}
            </div>
        </div>
    )
}