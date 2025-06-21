// lib/i18n.ts
export const locales = ['fr', 'en'] as const
export type Locale = typeof locales[number]

export const isValidLocale = (locale: string): locale is Locale => locales.includes(locale as Locale)

export const fallbackLocale: Locale = 'fr'