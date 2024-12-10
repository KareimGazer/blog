export interface Post {
    title: string
    url: string
    date: {
        time: number
        string: string
    }
    excerpt: string | undefined
}

export function formatDate(raw: string): Post['date'] {
    const date = new Date(raw)
    date.setUTCHours(12)
    return {
        time: +date,
        string: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        })
    }
}