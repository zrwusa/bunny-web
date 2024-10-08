import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'App Router',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Bunny</h1>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About Page &rarr;</h2>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link
            href="/bizz-lines/inventory-supply-chain/scm"
            className={styles.card}
          >
            <h2>SCM Page &rarr;</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/bunny.svg" alt="Bunny Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
