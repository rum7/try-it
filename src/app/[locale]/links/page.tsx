import { getLinks } from "@/app/actions/actions"

import { locales } from "@/lib/i18n"

import Link from "next/link"
import { cn } from "@/lib/utils"

import { FormLinksAdd } from "@/components/form-links/form-links-add"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Icons } from "@/components/ui/icons-list"
import { Value } from "@radix-ui/react-select"

type Datalinks = {
    tags: string[],
    name: string,
    address: string[],
    website: string,
    socials: {
        [key: string]: string
    }
}

const datalinks: Datalinks[] = [
    {
        tags: ["food", "bakery", "breakfast", "deserts", "sandwiches"],
        name: "Boulangerie Paris & CO",
        address: [
            "Paris, 4 rue de la convention 75015 Paris France"
        ],
        website: "https://boulangerieparisandco.fr/",
        socials: {
            instagram: "https://www.instagram.com/boulangerieparisandco/?hl=fr",
        },
    },
    {
        tags: ["food", "bakery", "breakfast", "deserts"],
        name: "BO&MIE",
        address: [
            "PARIS - 91 Rue de Rivoli, 75001 Paris - Tél : +33 1 42 33 49 84",
            "BARCELONE - C/ de Provença, 433 08025 Barcelone - Tél : +34 934 84 74 60",
            "AIX-EN-PROVENCE - 9 Route Départementale Gare TGV d, 13290 Aix-en-Provence",
            "JEDDAH - Centre commercial La Paz - ARABIE SAOUDITE ",
            "SEOUL - 63 Sogong-ro, Jung District, Seoul, Corée du Sud",
        ],
        website: "https://www.boetmie.com/",
        socials: {
            facebook: "https://www.facebook.com/boetmie/",
            instagram: "https://www.instagram.com/boetmie/",
            linkedin: "https://www.linkedin.com/company/bo-&-mie/"
        },
    },
]

const networkList = ["facebook", "instagram", "youtube", "x", "linkedin"]

const tagList = [
    {
        value: "Food",
        label: "Food"
    },
    {
        value: "Deserts",
        label: "Deserts"
    },
    {
        value: "Sandwiches",
        label: "Sandwiches"
    },
    {
        value: "Breakfast",
        label: "Breakfast"
    },
    {
        value: "Restaurant",
        label: "Restaurant",
    },
    {
        value: "Sport",
        label: "Sport",
    },
    {
        value: "Bakery",
        label: "Bakery",
    },
    {
        value: "Library",
        label: "Library",
    },
    {
        value: "Breakfast",
        label: "Breakfast",
    },
    {
        value: "Bar",
        label: "Bar",
    },
    {
        value: "VideoGames",
        label: "Video games",
    },
    {
        value: "Movie",
        label: "Movie",
    },
    {
        value: "HighTech",
        label: "High tech",
    },
    {
        value: "Outfit",
        label: "Outfit",
    },
]


type FetchLink = {
    tags: { value: string, label: string }[],
    name: string,
    address: string[],
    website: string,
    socials: { [key: string]: string, links: string }
}

type Props = {
    params: {
        locale: string
    }
}

// export function generateStaticParams() {
//     return locales.map(locale => ({ locale }))
// }

export default async function page({ params }: Props) {
    // const locale = params.locale
    // console.log('locale: ', locale)

    const fetchLinks = await getLinks()
    // console.log('fetchLinks: ', fetchLinks)

    return (
        <>
            <div className="mb-10">
                <Table>
                    <TableCaption className="italic">You should give it a try, really...</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Tags</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Website</TableHead>
                            <TableHead>Socials</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {datalinks.map((datalink, index) => (
                            <TableRow key={`${datalink.name}-${index}`}>
                                <TableCell className="font-medium">
                                    <ul className="flex flex-wrap gap-2">
                                        {datalink.tags.map((cat, index) => (
                                            <li
                                                key={index}
                                                className={cn("flex size-5 w-fit p-1 items-center justify-center rounded text-xs font-medium bg-indigo-400/20 text-indigo-500", )}
                                            >
                                                {cat}
                                            </li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>{datalink.name}</TableCell>
                                <TableCell>
                                    <ul className="flex flex-col gap-2">
                                        {datalink.address.map((address, index) => (
                                            <li key={index}> {address}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <Link href={datalink.website} target="_blank">{datalink.website}</Link>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        {Object.entries(datalink.socials).map(([key, url]) => {                                        
                                            const IconComponent = Icons[key as keyof typeof Icons]
                                            if (IconComponent) return <Link key={key} href={url} target="_blank"><IconComponent className="size-6" /></Link>
                                        })}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))} */}
                        {datalinks.map((datalink, index) => (
                            <TableRow key={`${datalink.name}-${index}`}>
                                <TableCell className="font-medium">
                                    <ul className="flex flex-wrap gap-2">
                                        {datalink.tags.map((cat, index) => (
                                            <li
                                                key={index}
                                                className={cn("flex size-5 w-fit p-1 items-center justify-center rounded text-xs font-medium bg-indigo-400/20 text-indigo-500", )}
                                            >
                                                {cat}
                                            </li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>{datalink.name}</TableCell>
                                <TableCell>
                                    <ul className="flex flex-col gap-2">
                                        {datalink.address.map((address, index) => (
                                            <li key={index}> {address}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <Link href={datalink.website} target="_blank">{datalink.website}</Link>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        {Object.entries(datalink.socials).map(([key, url]) => {                                        
                                            const IconComponent = Icons[key as keyof typeof Icons]
                                            if (IconComponent) return <Link key={key} href={url} target="_blank"><IconComponent className="size-6" /></Link>
                                        })}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                        <TableRow className="italic">
                            <TableCell>Total</TableCell>
                            <TableCell colSpan={4} className="">{datalinks.length} things you've to try</TableCell>
                        </TableRow>
                    </TableFooter> */}
                </Table>
            </div>

            <FormLinksAdd 
                networkList={networkList.sort((a,b) => a < b ? -1 : 1)} 
                tagList={tagList.sort((a,b) => a.value < b.value ? -1 : 1)}
            />
        </>
    )
}