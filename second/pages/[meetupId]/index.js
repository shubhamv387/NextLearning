import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

function MeetupDetails({ meetup }) {
  return (
    <>
      <Head>
        <title>{meetup?.title}</title>
        <meta
          name='description'
          content={meetup?.description.substring(0, 100)}
        />
      </Head>
      <MeetupDetail
        image={meetup?.image}
        title={meetup?.title}
        address={meetup?.address}
        description={meetup?.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
      },
    },
  };
}

export default MeetupDetails;
