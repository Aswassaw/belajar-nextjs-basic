import { useRouter } from 'next/router';
import styles from '../../styles/User.module.css';
import Layout from '../../components/Layout';

interface UserProps {
  dataUsers: any[];
}

const Users = (props: UserProps) => {
  const router = useRouter();
  const { dataUsers } = props;

  const onClickHandler = (id: number | string): void => {
    router.push(`/users/${id}`);
  };

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
            <button type="button" onClick={() => onClickHandler(user.id)}>Detail</button>
          </div>
        ))}
      </div>
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
