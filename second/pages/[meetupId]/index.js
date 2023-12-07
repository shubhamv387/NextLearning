import MeetupDetail from '../../components/meetups/MeetupDetail';
import { DUMMY_MEETUPS } from '@/constants/dummyMeetups';

function MeetupDetails({ meetup }) {
  return (
    <MeetupDetail
      image={meetup?.image}
      title={meetup?.title}
      address={meetup?.address}
      description={meetup?.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
      { params: { meetupId: 'm3' } },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);

  return {
    props: {
      meetup,
    },
  };
}

export default MeetupDetails;
