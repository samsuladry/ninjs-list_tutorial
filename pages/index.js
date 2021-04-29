import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis error aspernatur omnis neque assumenda ipsa earum quaerat ratione ducimus laudantium voluptatem reiciendis recusandae sint, incidunt dolorum veritatis maxime? Deserunt!</p>
        <p className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt eveniet accusamus quia vel accusantium fuga aliquam ducimus dicta quae. Obcaecati nam molestiae laborum commodi voluptatum minus iusto architecto ad?</p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
          </Link>
      </div>
    </>
  )
}
