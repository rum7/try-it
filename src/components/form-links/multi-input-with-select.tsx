"use client"

import { useEffect, useRef, useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { IconRender } from "@/components/icon-render"
import { Trash2 } from "lucide-react"


type Social = {
    network: string,
    link: string
}

type InputSelectOptions = {
    values: Social[]
    onChangeValues: (values: Social[]) => void
    addButtonLabel: string
    options: string[]
}

export function MultiInputWithSelect({ 
    values, 
    onChangeValues, 
    addButtonLabel, 
    options 
}: InputSelectOptions) {
    const [selectKey, setSelectKey] = useState(0)
    const [wasAdded, setWasAdded] = useState(false)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const addInput = (network: string) => {
        setSelectKey(prev => prev + 1) // remonte la key du Select  
        onChangeValues([...values, { network, link: "" }])
        setWasAdded(true)
    }

    const updateInput = (index: number, value: string) => {
        const updated = [...values]
        updated[index].link = value
        onChangeValues(updated)
    }

    const removeInput = (index: number) => {
        onChangeValues(values.filter((_, i) => i !== index))
    }

    useEffect(() => {
        if (wasAdded && values.length > 0) {
            const lastIndex = values.length - 1
            inputRefs.current[lastIndex]?.focus()
            setWasAdded(false)
        }
    }, [wasAdded, values.length])
    return (
        <>
            <Select key={selectKey} onValueChange={addInput}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder={addButtonLabel} />
                </SelectTrigger>
                <SelectContent>
                    {options.map(network => (
                    <SelectItem key={network} value={network}>
                        <div className="flex items-center gap-2">
                            <IconRender name={network} /> {network}
                        </div>
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {values.map((social, index) => (
            <div key={index} className="flex items-center gap-2 mt-2">
                <div className="w-6"><IconRender name={social.network} /></div>
                <Input
                    value={social.link}
                    onChange={(e) => updateInput(index, e.target.value)}
                    ref={(el) => { inputRefs.current[index] = el }}
                    placeholder={`Lien ${social.network}`}
                />
                <Button 
                    type="button" 
                    variant="destructive" 
                    className="cursor-pointer"
                    onClick={() => removeInput(index)}
                >
                    <Trash2 />
                </Button>
            </div>
            ))}
        </>        
    )
}
