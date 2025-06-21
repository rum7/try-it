"use server"

import { createClient } from "@/utils/supabase/server"


export async function getLinks() {
    const supabase = await createClient()
    const { data, error } = await supabase
    .from('links')
    .select('*')
    .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching links', error)
        throw new Error('Failed to fetch links')
    }

    // const links = data
    return data
}