import Link from 'next/link';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <div className={styles['header-container']}>
          <h1>Docs Test</h1>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/webhooks">
              <a>Webhooks</a>
            </Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
