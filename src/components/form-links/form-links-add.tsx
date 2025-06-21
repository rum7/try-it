"use client"

import { useState } from "react"

import { MultiInputWithButton } from "@/components/form-links/multi-input-with-btn"
import { MultiInputWithSelect } from "@/components/form-links/multi-input-with-select"
import { TagSelect } from "@/components/form-links/tag-select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


type FormOptions = {
    networkList: string[]
    tagList: { value: string, label: string }[]
}

export function FormLinksAdd({ networkList, tagList }: FormOptions) {
    const [selectedAddresses, setSelectedAddresses] = useState<string[]>([""])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [selectedSocials, setSelectedSocials] = useState<{ network: string; link: string }[]>([])
    
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        // const { name, website } = Object.fromEntries(formData)

        const data = {
            name: formData.get('name'),
            addresses: selectedAddresses,
            website: formData.get('website'),
            socials: selectedSocials,
            tags: selectedTags
        }
    
        console.log('data: ', data)
    }

  return (
    // <div className="max-w-[640px] sm:w-full mx-auto py-10">
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-4xl sm:text-nowrap">Something new we should try ?</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label>Name</Label>
                    <Input name="name" />
                </div>

                <div className="space-y-2">
                    <Label>Address(es)</Label>
                    <MultiInputWithButton
                        values={selectedAddresses}
                        onChangeValues={setSelectedAddresses}
                        addButtonLabel={"Add an address"}
                    />
                </div>
                
                <div className="space-y-2">
                    <Label>Website</Label>
                    <Input name="website" />
                </div>

                <div className="space-y-2">
                    <Label>Social(s) network</Label>
                    <MultiInputWithSelect
                        values={selectedSocials}
                        onChangeValues={setSelectedSocials}
                        addButtonLabel={"Add a social network"}
                        options={networkList}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Tags</Label>
                    <TagSelect
                        selectedTags={selectedTags}
                        onChangeTag={setSelectedTags}
                        selectButtonLabel={"Add a tag"}
                        tagList={tagList}
                    />
                </div>

                <Separator />

                <div className="flex justify-end">
                    <Button type="submit" className="cursor-pointer">Save</Button>
                </div>
            </form>
        </div>
    </div>
    )
}

