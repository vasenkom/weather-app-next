'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
    return (
        <div className="mx-auto w-[80%] mt-4">
            <h1 className="red-500">Welcome</h1>
            <div className="mt-3 flex gap-8">
                <Button size="sm" variant="outline" asChild>
                    <Link href="/CSR">CSR</Link>
                </Button>
                <Button size="sm" variant="outline">
                    <Link href="/SSR">SSR</Link>
                </Button>
            </div>
        </div>
    )
}