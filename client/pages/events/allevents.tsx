import type { NextPage } from "next";
import { FightEvent } from "../../types";
import FightCard from "../../components/fightcardpreview";
import styles from "../../styles/event.module.css";
import { getAllEvents } from "../../lib/event";

const Home: NextPage = ({ events }: any) => {
  return (
    <div className={styles.container}>
      <h1>Upcoming MMA Events</h1>
      <div className={styles.grid}>
        {events.map((event: FightEvent) => (
          <FightCard
            // Is there a better way to write this than !
            // We know they'll never be null here
            id={event.id!}
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
      events: data.fightCards,
    },
  };
}

export default Home;
