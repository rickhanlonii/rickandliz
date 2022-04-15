import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Liz</title>
        <meta name="description" content="Rick and Liz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rick and Liz
        </h1>
          <h2>October 29th, 2022</h2>
      </main>
    </div>
  )
}
