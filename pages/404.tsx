import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const NotFound: NextPage = () => {
  const [time, setTime] = useState(5);
  const router = useRouter();

  useEffect(() => {
    document.title = '404 Not Found';

    const timeTimeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    const timeInterval = setInterval(() => {
      setTime((c) => c - 1);
    }, 1000);

    return () => {
      clearTimeout(timeTimeout);
      clearInterval(timeInterval);
    };
  }, []);

  const onClickHandler = (): void => {
    router.push('/');
  };

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        Akan redirect dalam
        {' '}
        {time || 'Redirect...'}
      </p>
      <button type="button" onClick={onClickHandler}>Back To Home Now</button>
    </div>
  );
};

export default NotFound;
