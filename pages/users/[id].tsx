import Layout from '../../components/Layout';

interface DetailProps {
  user: {name: string, email: string},
}

const Detail = (props: DetailProps) => {
  const { user } = props;

  return (
    <Layout title="Next.js Basic | Detail Page">
      <h1>
        Detail Page
      </h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </Layout>
  );
};

export default Detail;

export async function getStaticPaths() {
  const res: Response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  );
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: any) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const res: Response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
