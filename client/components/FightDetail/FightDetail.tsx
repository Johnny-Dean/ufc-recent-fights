import { useState, useEffect } from "react";
import { getFight } from "../../lib/event";
import { Fight } from "../../types";
import cn from "classnames";
import styles from "./FightDetail.module.css";
import RecordTable from "../Fighter/RecordTable/RecordTable";
import PhysicalStats from "../Fighter/PhysicalStats/PhysicalStats";

function Fighter({ fighter }: any) {
  return (
    <div className={styles.fighter_container}>
      <h1>{fighter.name}</h1>
      <PhysicalStats {...fighter.physical} />
      <RecordTable record={fighter.record} />
    </div>
  );
}

export default function FightDetail({ red, blue }: Fight) {
  const [fight, setFight] = useState(undefined as any);
  const [hide, setHide] = useState(true);
  const handleClick = () => setHide(!hide);

  useEffect(() => {
    getFight(red, blue).then((res) => {
      setFight(res.data.Fight);
    });
  }, []);

  if (fight) {
    const red = fight[0];
    const blue = fight[1];
    return (
      <>
        <button className={styles.fight_btn} onClick={handleClick}>
          {red.name} vs {blue.name}
        </button>
        <div
          className={cn({
            [styles.hide_content]: hide === true,
            [styles.content]: hide === false,
          })}
        >
          <Fighter fighter={red} />
          <h1>VS</h1>
          <Fighter fighter={blue} />
        </div>
      </>
    );
  } else {
    return <button className={styles.skeleton_btn}>loading</button>;
  }
}
