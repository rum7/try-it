"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Check, ChevronsUpDown, X } from "lucide-react"


type TagSelectOptions = {
    selectedTags: string[]
    onChangeTag: (values: string[]) => void
    selectButtonLabel: string
    tagList: { value: string, label: string }[]
}

export function TagSelect({ 
    selectedTags, 
    onChangeTag, 
    selectButtonLabel,
    tagList     
}: TagSelectOptions) {
    const [open, setOpen] = useState(false)

    const toggleValue = (val: string) => {
        if (selectedTags.includes(val)) {
            onChangeTag(selectedTags.filter((v) => v !== val))
        } else {
            onChangeTag([...selectedTags, val])
        }
    }

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[240px] justify-between">
                        {selectButtonLabel}
                        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] p-0">
                    <Command>
                        <CommandInput placeholder="Search..." />
                        <CommandList>
                            <CommandGroup>
                            {tagList.map((tag) => (
                                <CommandItem key={tag.value} onSelect={() => toggleValue(tag.value)}>
                                    <span>{tag.label}</span>
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            selectedTags.includes(tag.value) ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {selectedTags.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                    {selectedTags.map((v) => (
                        <Badge 
                            key={v} 
                            variant="secondary"
                            className="cursor-pointer h-8 min-w-8 tabular-nums"
                            onClick={() => toggleValue(v)}
                        >
                            {v}
                            <span className="flex items-center size-4"><X /></span>                            
                        </Badge>
                    ))}
                </div>
            ) : null
            }
        </>        
    )
}
