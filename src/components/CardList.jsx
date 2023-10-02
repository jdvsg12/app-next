import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/CardList.module.scss'

const dataArticle = [
  {
    rute: "/imag/200x200.webp",
    alt: "articol",
    title: "lorem picsum dolor",
    URL: "wwww.google.com"
  },
  {
    rute: "/imag/200x200.webp",
    alt: "articol 2",
    title: "lorem picsum dolor 2",
    URL: "wwww.google.com"
  },
  {
    rute: "/imag/200x200.webp",
    alt: "articol 3",
    title: "lorem picsum dolor 3",
    URL: "wwww.google.com"
  },
]

function Card({ rute, alt, title, url }) {
  return (
    <article className={styles.article}>
      <Image
        src={rute}
        alt={alt}
        sizes="(min-width: 768px) 120px"
        width={200}
        height={200}
      />
      <h2>
        {title}
      </h2>
      <Link href={url} target="_blank" rel="noopener noreferrer">Leer mas</Link>
    </article>
  )
}

function CardList() {
  return (
    <section className={styles.section}>
      {dataArticle.map(({ rute, alt, title, URL }) => (
        <Card rute={rute} alt={alt} title={title} url={URL} />
      ))}
    </section>
  )
}

export default CardList