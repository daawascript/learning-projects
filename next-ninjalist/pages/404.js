import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []); //eslint-disable-line
  return (
    <div className='not-found'>
      <h1>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>homepage</a>
        </Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;
