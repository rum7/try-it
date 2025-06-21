import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { locales, fallbackLocale, isValidLocale } from "@/lib/i18n"

export default async function RootPage() {
  const headersList = await headers()
  const acceptLanguage = headersList.get("accept-language") || ""
  const preferredLang = acceptLanguage.split(",")[0].split("-")[0]

  const locale = isValidLocale(preferredLang) ? preferredLang : fallbackLocale

  redirect(`/${locale}`)
}