import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${router.pathname === '/' ? styles.active : ''}`}><Link href="/">Home</Link></li>
        <li className={`${styles.item} ${router.pathname === '/blog' ? styles.active : ''}`}><Link href="/blog">Blog</Link></li>
        <li className={`${styles.item} ${router.pathname === '/users' ? styles.active : ''}`}><Link href="/users">Users</Link></li>
      </ul>
    </header>
  );
};

export default Header;
