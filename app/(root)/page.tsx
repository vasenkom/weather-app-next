'use client'
import { Button } from "@/components/ui/button"

export default function HomePage() {
    return (
        <>
            <h1 className="red-500">Welcome</h1>
            <div>
                <Button size="sm" variant="outline">CRS</Button>
                <Button size="sm" variant="outline">SSR</Button>
            </div>
        </>
    )
}