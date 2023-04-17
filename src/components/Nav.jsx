import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { Alegreya } from 'next/font/google'
import styles from '@/styles/Nav.module.css'
import { useState } from 'react'

const alegreya = Alegreya({ subsets: ['latin'], weight: ['400', '500'] })

const fetcher = (url) => fetch(url).then((res) => res.json())

function Nav() {
    const [icon, setIcon] = useState('navToggler')
    const [active, setActive] = useState('text')


    const navToggler = () => {

        active === 'text'? setActive('navMenu'): setActive('text')
        icon === 'navToggler' ? setIcon('toggle') : setIcon('navToggler')
    }

    const { data, error, isLoading } = useSWR('/api/nav', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <nav className={styles.nav}>
            <Image
                className={styles.logo}
                src="/logo.svg"
                alt="Logo INPSAC"
                width={300}
                height={40}
                priority
            />
            <ul className={styles[active]}>
                {data.map(({ title, rute }, index) => (
                    <li key={`${title}--${index}`}>
                        <Link className={alegreya.className} href={rute} target="_blank" rel="noopener noreferrer">
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={navToggler} className={styles[icon]}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
        </nav>
    )
}

export default Nav