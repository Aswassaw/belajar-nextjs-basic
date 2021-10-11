import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
    children: ReactNode;
    title: string;
}

const Layout = (props: LayoutProps) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Website Next.js Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
