"use client"

import { useRef, useEffect, useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Trash2 } from "lucide-react"


type InputSelectOptions = {
    values: string[],
    onChangeValues: (value: string[]) => void
    addButtonLabel: string
}

export function MultiInputWithButton({ 
    values, 
    onChangeValues, 
    addButtonLabel 
}: InputSelectOptions) {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const [wasAdded, setWasAdded] = useState(false)
    
    const addInput = () => {
        onChangeValues([...values, ""])
        setWasAdded(true)
    }

    const updateInput = (value: string, index: number) => {
        const updated = [...values]
        updated[index] = value
        onChangeValues(updated)
    }

    const removeInput = (index: number) => onChangeValues(values.filter((_, i) => i !== index))

    useEffect(() => {
        if (wasAdded && values.length > 0) {
            const lastIndex = values.length - 1
            inputRefs.current[lastIndex]?.focus()
            setWasAdded(false)
        }
    }, [wasAdded, values.length])

    return (
        <>
            {values.map((value, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <Input
                        value={value}
                        onChange={(e) => updateInput(e.target.value, index)}
                        ref={(el) => { inputRefs.current[index] = el }}
                    />
                    {index > 0 && (
                        <Button 
                            type="button" 
                            variant="destructive" 
                            className="cursor-pointer"
                            onClick={() => removeInput(index)}
                        >
                            <Trash2 />
                        </Button>
                    )}
                </div>
            ))}            
            <Button 
                type="button" 
                variant="secondary"
                className="cursor-pointer"
                onClick={addInput} 
            >
                + {addButtonLabel}
            </Button>
        </>
    )
}
