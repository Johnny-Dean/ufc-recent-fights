import { getEventDetails } from "../../lib/event";
import { Fight } from "../../types";
import styles from "../../styles/event.module.css";
import FightDetail from "../../components/FightDetail/FightDetail";
import Link from "next/link";

export default function Event({ eventData }: any) {
  return (
    <>
      <div className={styles.container}>
        <Link href="/events/allevents">
          <a>
            <h1>{eventData?.event?.title}</h1>
          </a>
        </Link>

        <div className={styles.fight_container}>
          {eventData?.event?.fights.map((fight: Fight, index: number) => (
            <FightDetail key={index} {...fight} />
          ))}
        </div>
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
