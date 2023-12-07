import MeetupList from '@/components/meetups/MeetupList';
import { DUMMY_MEETUPS } from '@/constants/dummyMeetups';

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
