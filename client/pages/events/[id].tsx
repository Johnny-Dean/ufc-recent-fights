import { getAllEventIds, getEventDetails } from "../../lib/event";
import { DetailedFight, FightEvent, PastFight } from "../../types";
import styles from "../../styles/event.module.css";
import cn from "classnames";
import { useState } from "react";

function RecordRowHeader() {
  return (
    <thead>
      <tr>
        <th>Outcome</th>
        <th>Opponent</th>
        <th>Method</th>
        <th>Round</th>
        <th>Time</th>
      </tr>
    </thead>
  );
}

function RecordRow({ outcome, opponent, method, round, time }: PastFight) {
  return (
    <tbody>
      <tr>
        <th>{outcome}</th>
        <th>{opponent}</th>
        <th>{method}</th>
        <th>{round.toString()}</th>
        <th>{time}</th>
      </tr>
    </tbody>
  );
}

interface FightProps {
  fight: DetailedFight;
}

function Fight({ fight }: FightProps) {
  const [hide, setHide] = useState(true);
  const handleClick = () => setHide(!hide);

  return (
    <>
      <button onClick={handleClick}>
        {fight.blue.name} vs {fight.red.name}
      </button>
      <div
        className={cn({
          [styles.hide_records_container]: hide === true,
          [styles.records_container]: hide === false,
        })}
      >
        <table>
          <RecordRowHeader />
          {fight.blue.record.map((fight: PastFight, index: number) => (
            <RecordRow key={index + 1} {...fight} />
          ))}
        </table>
        <table>
          <RecordRowHeader />
          {fight.red.record.map((fight: PastFight, index: number) => (
            <RecordRow key={index + 2} {...fight} />
          ))}
        </table>
      </div>
    </>
  );
}

export default function Event({ eventData }: any) {
  return (
    <>
      <h1>{eventData.findFightCard.title}</h1>
      {/* Would this be better as its own component or is that abstracting too much away? */}
      <div className={styles.fight_container}>
        {eventData.findFightCard.fights.map(
          (fight: DetailedFight, index: number) => (
            <Fight key={index} fight={fight} />
          )
        )}
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
