import React from 'react';
import { details } from '@/app/constants/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const About = () => {
  return (
    <>
      <h1>About Us Page</h1>
      {details.map((user) => (
        <div>
          <Link href={`aboutus/${user.id}`} key={user.id}>
            {user.name}{' '}
          </Link>
        </div>
      ))}
    </>
  );
};

export default About;
