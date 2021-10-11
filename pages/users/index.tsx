import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';

const Users: NextPage = () => (
  <Layout title="Next.js Basic | User Page">
    <h1>User Page</h1>
    <Link href="/users/1">Detail</Link>
  </Layout>
);

export default Users;
