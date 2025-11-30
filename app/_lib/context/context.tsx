'use client'

import React, { createContext, useContext, useMemo, useState } from "react";

export type WeatherState = {
    city: string | null;
}

export type WeatherContextType = {
    inputState: WeatherState
    // Function that takes a new state or a function that calculates the new state from the previous one
    setInputState: React.Dispatch<React.SetStateAction<WeatherState>>
    updateInputState<K extends keyof WeatherState>(
        key: K,
        value: WeatherState[K]
    ):void
}

const WeatherContext = createContext<WeatherContextType | null>(null)

export const useWeatherContext = () => {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error (
            'useWeatherContext must be used inside PredictionsProvider'
        )
    }
    return context
}

export const WeatherProvider = ({children}:{children: React.ReactNode}) => {
    const [inputState, setInputState] = useState<WeatherState>({ city: null });

    const updateInputState = <K extends keyof WeatherState>(
        key: K,
        value: WeatherState[K]
    ) => setInputState((prev) => ({...prev, [key]: value}))

    const contextValue = useMemo<WeatherContextType>(() => ({inputState, setInputState, updateInputState}), [inputState, setInputState])
    
    return(
        <WeatherContext.Provider value={contextValue}>
            {children}
        </WeatherContext.Provider>
    )
}