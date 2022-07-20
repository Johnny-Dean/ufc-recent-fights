import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import { Event } from "../../types";
import FightCard from "../../components/fightcardpreview";
import styles from "../../styles/event.module.css";

const AllEventsQuery = gql`
  query FightCards {
    allFightCards {
      org
      title
      fights {
        blue
        red
      }
    }
  }
`;

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(AllEventsQuery);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <div className={styles.container}>
      <h1>Upcoming MMA Events</h1>
      <div className={styles.grid}>
        {data.allFightCards.map((event: Event) => (
          <FightCard
            key={event.title}
            title={event.title}
            main={event.fights[0]}
            comain={event.fights[1]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
