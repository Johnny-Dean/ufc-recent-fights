import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { FightEvent } from "../../types";
import FightCard from "../../components/fightcardpreview";
import styles from "../../styles/event.module.css";
import { AllEventsQuery, getAllEventIds } from "../../lib/event";

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(AllEventsQuery);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  getAllEventIds();
  return (
    <div className={styles.container}>
      <h1>Upcoming MMA Events</h1>
      <div className={styles.grid}>
        {data.allFightCards.map((event: FightEvent) => (
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

export default Home;
