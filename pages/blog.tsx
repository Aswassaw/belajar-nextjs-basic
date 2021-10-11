import styles from '../styles/Blog.module.css';
import Layout from '../components/Layout';

interface BlogProps {
    dataPosts: any[];
}

const Blog = (props: BlogProps) => {
  const { dataPosts } = props;

  return (
    <Layout title="Next.js Basic | Blog Page">
      <h1 className="title">Blog Page</h1>
      <div className={styles['card-container']}>
        {dataPosts.map((post: any) => (
          <div className={styles['card-item']} key={post.id}>
            <p>
              <b>{post.title}</b>
            </p>
            <p>
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res: Response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  );
  const dataPosts = await res.json();

  return {
    props: {
      dataPosts,
    },
  };
}
