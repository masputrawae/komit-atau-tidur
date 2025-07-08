const SITE_URL = import.meta.env.SITE
const BASE_URL = import.meta.env.BASE_URL

export function isFileUrl(url: string): boolean {
	const fileExtensions = new Set([
		'jpg',
		'jpeg',
		'png',
		'gif',
		'webp',
		'svg',
		'pdf',
		'doc',
		'docx',
		'xls',
		'xlsx',
		'zip',
		'rar',
		'mp3',
		'mp4',
		'ico',
		'webmanifest',
		'json',
		'yaml',
		'woff2'
	])

	const match = url.match(/\.([a-zA-Z0-9]+)(?:\?|#|$)/)
	if (!match) return false

	return fileExtensions.has(match[1].toLowerCase())
}

export function relUrl(url: string) {
	if (/^https?:\/\//i.test(url)) return url

	const cleanBase = BASE_URL.replace(/\/$/, '')
	const cleanUrl = url.replace(/^\/|\/$/g, '')

	if (!cleanUrl) return `${cleanBase}/`

	const finalUrl = `${cleanBase}/${cleanUrl}`
	return isFileUrl(url) ? finalUrl : `${finalUrl}/`
}

export function absUrl(url: string) {
	if (/^https?:\/\//i.test(url)) return url

	const cleanSite = SITE_URL.replace(/\/$/, '')
	const cleanBase = BASE_URL.replace(/\/$/, '')
	const cleanUrl = url.replace(/^\/|\/$/g, '')

	if (!cleanUrl) return `${cleanSite}${cleanBase}/`

	const finalUrl = `${cleanSite}${cleanBase}/${cleanUrl}`
	return isFileUrl(url) ? finalUrl : `${finalUrl}/`
}