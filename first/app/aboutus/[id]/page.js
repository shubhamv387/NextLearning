const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

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
