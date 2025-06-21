"use client"

import { usePathname, useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { locales } from "@/lib/i18n"

export function LocaleSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = pathname.split("/")[1]

    const onSelectLocale = (locale: string) => {
        const segments = pathname.split("/")
        segments[1] = locale
        router.push(segments.join("/"))
    }

    return (
        <div className='fixed bottom-30 left-5'>
            <Select onValueChange={onSelectLocale} defaultValue={currentLocale}>
                <SelectTrigger>
                    <SelectValue placeholder="Langue" />
                </SelectTrigger>
                <SelectContent className="min-w-fit" position="popper" side="right">
                    {locales.map((locale) => (
                        <SelectItem key={locale} value={locale}>
                            {locale.toUpperCase()}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
