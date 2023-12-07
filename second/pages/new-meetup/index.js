import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) router.push('/');
      else alert('Something went wrong!');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta name='description' content='add new meetup here' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
