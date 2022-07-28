import { getEventDetails } from "../../lib/event";
import { Fight } from "../../types";
import styles from "../../styles/event.module.css";
import FightDetail from "../../components/FightDetail/FightDetail";

export default function Event({ eventData }: any) {
  return (
    <>
      <h1>{eventData.event.title}</h1>
      <div className={styles.fight_container}>
        {eventData.event.fights.map((fight: Fight, index: number) => (
          <FightDetail key={index} {...fight} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const request = await getEventDetails(params.id);
  const eventData = await request.data;
  return {
    props: {
      eventData,
    },
  };
}
