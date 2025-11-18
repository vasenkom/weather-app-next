'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
    text: any
    description?: string
}


export default function Cards({text, description}: Props) {
  return (
        <Card className="w-full max-w-xs">
            <CardHeader>
                <CardTitle>{text}</CardTitle>
                <CardDescription> {description} </CardDescription>
            </CardHeader>
        </Card>
  )
}