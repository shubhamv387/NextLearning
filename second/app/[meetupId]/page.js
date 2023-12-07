'use client';

import { DUMMY_MEETUPS } from '@/constants/dummyMeetups.js';
import MeetupDetail from '../../components/meetups/MeetupDetail.js';
import { useParams } from 'next/navigation.js';

function MeetupDetails() {
  const { meetupId } = useParams();
  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);

  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
}

export default MeetupDetails;
