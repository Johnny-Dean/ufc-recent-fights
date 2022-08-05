import { getEventDetails } from "../../lib/event";
import { Fight, Event as EventType } from "../../types";
import styles from "../../styles/event.module.css";
import FightDetail from "../../components/FightDetail/FightDetail";
import Link from "next/link";

interface Props {
  event: EventType;
}
export default function Event({ event }: Props) {
  return (
    <>
      <div className={styles.container}>
        <Link href="/events/allevents">
          <a>
            <h1>{event?.title}</h1>
          </a>
        </Link>

        <div className={styles.fight_container}>
          {event?.fights.map((fight: Fight, index: number) => (
            <FightDetail key={index} {...fight} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  console.log(params.id);
  const request = await getEventDetails(params.id);
  const event = await request.data.event;
  return {
    props: {
      event,
    },
  };
}
