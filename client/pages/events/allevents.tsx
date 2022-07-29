import type { NextPage } from "next";
import { FightEvent } from "../../types";
import EventCard from "../../components/Cards/EventCard/EventCard";
import styles from "../../styles/allevents.module.css";
import { getAllEvents } from "../../lib/event";

const Home: NextPage = ({ events }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {events.map((event: FightEvent) => (
          <EventCard
            id={event.id!}
            org={event.org}
            key={event.id}
            title={event.title!}
            main={event.fights![0]}
            comain={event.fights![1]}
          />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const request = await getAllEvents();
  const data = await request.data;
  return {
    props: {
      events: data.events,
    },
  };
}

export default Home;
