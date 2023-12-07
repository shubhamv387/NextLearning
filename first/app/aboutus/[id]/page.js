import { details } from '@/app/constants/users';

export default function Details({ params }) {
  const { id } = params;
  const person = details.find((i) => i.id === parseInt(id));

  return (
    <>
      {person ? (
        <h1>
          {person.name} {person.role}
        </h1>
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </>
  );
}
