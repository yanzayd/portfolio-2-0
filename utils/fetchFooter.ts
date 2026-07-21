import { Footer } from '../typings'

export const fetchFooter = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFooter`)

    const data = await res.json()
    const footer: Footer[] = data.footer
    
    // console.log('fetching', footer)

    return footer
}