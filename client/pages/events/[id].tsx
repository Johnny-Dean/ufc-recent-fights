import { getAllEventIds, getEventDetails } from "../../lib/event";
import { DetailedFight, FightEvent, PastFight } from "../../types";
import styles from "../../styles/event.module.css";

interface FightProps {
  fight: DetailedFight;
}

function FightRow({ outcome, opponent, method, round, time }: PastFight) {
  return (
    <tr>
      <th>{outcome}</th>
      <th>{opponent}</th>
      <th>{method}</th>
      <th>{round.toString()}</th>
      <th>{time}</th>
    </tr>
  );
}

function Fight({ fight }: FightProps) {
  return (
    <>
      <button>
        {fight.blue.name} vs {fight.red.name}
      </button>

      <div className={styles.records_container}>
        <div>
          <tr>
            <th>Outcome</th>
            <th>Opponent</th>
            <th>Method</th>
            <th>Round</th>
            <th>Time</th>
          </tr>
          {fight.blue.record.map((fight: PastFight) => (
            <FightRow key={fight.outcome} {...fight} />
          ))}
        </div>
        <div>
          <th>Outcome</th>
          <th>Opponent</th>
          <th>Method</th>
          <th>Round</th>
          <th>Time</th>
          {fight.red.record.map((fight: PastFight) => (
            <FightRow key={fight.outcome} {...fight} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Event({ eventData }: any) {
  return (
    <>
      <h1>{eventData.findFightCard.title}</h1>
      <div className={styles.fight_container}>
        {eventData.findFightCard.fights.map((fight: DetailedFight) => (
          <Fight key={123} fight={fight} />
        ))}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const request = await getAllEventIds();
  const data = await request.data;
  let paths = data.allFightCards.map((event: FightEvent) => ({
    params: { id: event.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const request = await getEventDetails(params.id);
  const eventData = await request.data;
  return {
    props: {
      eventData,
    },
  };
}
