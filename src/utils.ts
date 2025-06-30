// src/utils/posts.ts
import { getCollection } from 'astro:content'

const site = import.meta.env.SITE || 'https://example.com'
const base = import.meta.env.BASE_URL || '/'

// GET POST
export async function getPosts(type: string | 'Projects' | 'Notes' | 'Series' | 'Publish' | 'All' | 'NotProjects') {
	const allPosts = await getCollection('vault')
	let posts
	if (!type || type === 'All') {
		posts = allPosts
	} else if (type === 'NotProjects') {
		posts = allPosts.filter((i) => i.data.type != 'Projects')
	} else {
		posts = allPosts.filter((i) => i.data.type === type)
	}
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

// TAGS CLOUD
export async function tagCloud() {
	const allPosts = await getCollection('vault')
	const allTags = allPosts.flatMap((item) => item.data.tags || [])

	const tagMap = new Map()

	for (const tag of allTags) {
		tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
	}

	const tagArray = Array.from(tagMap, ([tag, count]) => ({ tag, count }))
	return tagArray.sort((a, b) => b.count - a.count)
}

// TIME FORMAT
export function timeFormat(dateInput: string, longDate: boolean) {
	const date = new Date(dateInput)
	const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
	const bulan = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	]

	const namaHari = hari[date.getDay()]
	const tanggal = date.getDate()
	const namaBulan = bulan[date.getMonth()]
	const tahun = date.getFullYear()

	let jam = date.getHours()
	const menit = date.getMinutes().toString().padStart(2, '0')

	const ampm = jam >= 12 ? 'PM' : 'AM'
	jam = jam % 12
	jam = jam ? jam : 12

	let setDate

	longDate
		? (setDate = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}  - Jam ${jam}:${menit} ${ampm}`)
		: (setDate = `${tanggal} ${namaBulan} ${tahun}`)

	return setDate
}

// SET URL ABS or REL
export function isFileUrl(url: string): boolean {
	const fileExtensions = [
		'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'pdf',
		'doc','docx','xls','xlsx','zip','rar',
		'mp3','mp4','ico','webmanifest','json','yaml',
    'woff2'
	]

	const match = url.match(/\.([a-zA-Z0-9]+)(?:\?|#|$)/)
	if (!match) return false

	const ext = match[1].toLowerCase()
	return fileExtensions.includes(ext)
}

export function relUrl(url: string) {
	if (/^https?:\/\//i.test(url)) {
		return url
	}
	const cleanBase = base.replace(/\/$/, '')
	const cleanUrl = url.replace(/^\/|\/$/g, '')

	if (!cleanUrl) return `${cleanBase}/`

	const finalUrl = `${cleanBase}/${cleanUrl}`
	return isFileUrl(url) ? finalUrl : `${finalUrl}/`
}

export function absUrl(url: string) {
	if (/^https?:\/\//i.test(url)) {
		return url
	}
	const cleanSite = site.replace(/\/$/, '')
	const cleanBase = base.replace(/\/$/, '')
	const cleanUrl = url.replace(/^\/|\/$/g, '')

	if (!cleanUrl) return `${cleanSite}${cleanBase}/`

	const finalUrl = `${cleanSite}${cleanBase}/${cleanUrl}`
	return isFileUrl(url) ? finalUrl : `${finalUrl}/`
}

// TITLE WORLD
export function titleWord(text: string) {
	return text
		.split(' ')
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
		.replace(/[-_]/g, ' ')
}
