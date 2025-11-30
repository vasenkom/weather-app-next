"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Value = 'Metric' | 'Imperial'
type ValueType = {
    value: Value
    setValue: (v: Value) => void
}

const valueContext = createContext<ValueType | undefined>(undefined)

export function UnitsProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<Value>("Metric")

  return (
    <valueContext.Provider value={{ value, setValue }}>
      {children}
    </valueContext.Provider>
  )
}

export function useUnits() {
  const ctx = useContext(valueContext)
  if (!ctx) {
      throw new Error("useCurrency must be used inside CurrencyProvider")
  }
  return ctx
}