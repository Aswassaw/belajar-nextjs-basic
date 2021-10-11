import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Next.js Basic | Detail Page">
      <h1>
        Detail Page For User With Id
        {' '}
        {id}
      </h1>
    </Layout>
  );
};

export default Detail;
