import { useState, useEffect } from "react";
import { getFight } from "../../lib/event";
import { Fight } from "../../types";
import cn from "classnames";
import styles from "./FightDetail.module.css";
import RecordTable from "../Fighter/RecordTable/RecordTable";

export default function FightDetail({ red, blue }: Fight) {
  let [fight, setFight] = useState(undefined as any);
  useEffect(() => {
    getFight(red, blue).then((res) => {
      setFight(res.data.Fight);
    });
  }, []);

  const [hide, setHide] = useState(true);
  const handleClick = () => setHide(!hide);

  if (fight) {
    const red = fight[0];
    const blue = fight[1];
    return (
      <>
        <button onClick={handleClick}>
          {red.name} vs {blue.name}
        </button>
        <div
          className={cn({
            [styles.hide_content_container]: hide === true,
            [styles.content_container]: hide === false,
          })}
        >
          <div className={styles.fighter_container}>
            <RecordTable record={red.record} />
          </div>
          <div className={styles.fighter_container}>
            <RecordTable record={blue.record} />
          </div>
        </div>
      </>
    );
  } else {
    return <button>loading...</button>;
  }
}
