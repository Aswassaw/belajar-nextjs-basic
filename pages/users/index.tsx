import Link from 'next/link';
import styles from '../../styles/User.module.css';
import Layout from '../../components/Layout';

interface UserProps {
  dataUsers: any[];
}

const Users = (props: UserProps) => {
  const { dataUsers } = props;

  return (
    <Layout title="Next.js Basic | User Page">
      <h1>User Page</h1>
      <div className={styles['card-container']}>
        {dataUsers.map((user: any) => (
          <div className={styles['card-item']} key={user.id}>
            <p>
              <strong>Name: </strong>
              {user.name}
            </p>
            <p>
              <strong>Email: </strong>
              {user.name}
            </p>
            <p>
              <strong>Website: </strong>
              <a className={styles.link} href={`https://${user.website}`} target="_blank" rel="noreferrer">Website</a>
            </p>
          </div>
        ))}
      </div>
      <button type="button">
        <Link href="/users/1">Detail</Link>
      </button>
    </Layout>
  );
};

export default Users;

export async function getStaticProps() {
  const res: Response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  );
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}
