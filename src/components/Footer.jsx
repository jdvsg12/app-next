import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { Roboto } from 'next/font/google';
import styles from '@/styles/Footer.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500'] })

const fetcher = (url) => fetch(url).then((res) => res.json())

function Footer() {

    const { data, error, isLoading } = useSWR('/api/footer', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
            <footer className={styles.footer}>
                <section className={styles.section}>
                    <ul className={styles.icon}>
                        {data[1].map(({ rute, alt, link }, index) => (
                            <li key={`${alt}-${index}`}>
                                <Link href={link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={rute}
                                        alt={alt}
                                        width={40}
                                        height={40}
                                        priority
                                    /></Link>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.text}>
                        {data[0].map(({ title, rute }, index) => (
                            <li className={roboto.className} key={`${title}-${index}`}>
                                <Link target="_blank" rel="noopener noreferrer" href={rute}>{title}</Link>
                            </li>
                        )
                        )}
                    </ul>
                </section>
                <h1 className={roboto.className}>© 2023 INPSAC</h1>
            </footer>
    )
}
export default Footer

