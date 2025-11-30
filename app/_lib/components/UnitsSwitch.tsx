"use client"

import { Button } from "@/components/ui/button"
import { useUnits } from "./providers/UnitsProvider"

export function UnitsSwitcher() {
  const { value, setValue } = useUnits()

  return (
    <div className="flex items-center gap-2 mt-4">
        <Button variant={value == 'Metric' ? "outline" : "ghost"} onClick={() => setValue("Metric")}>Metric</Button>
        <p>/</p>
        <Button variant={value == 'Imperial' ? "outline" : "ghost"} onClick={() => setValue("Imperial")}>Imperial</Button>
    </div>
  )
}
