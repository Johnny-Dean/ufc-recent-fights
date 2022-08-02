import { useState, useEffect } from "react";
import { getFight } from "../../lib/event";
import { Fight } from "../../types";
import cn from "classnames";
import styles from "./FightDetail.module.css";
import Card from "../Cards/Card/Card";
import Fighter from "../Fighter/Fighter";

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
      <div className={styles.container}>
        <div
          className={cn({
            [styles.fight_header]: hide === true,
            [styles.fight_header_selected]: hide === false,
          })}
          onClick={handleClick}
        >
          {red.name} vs {blue.name}
        </div>
        <div
          className={cn({
            [styles.hide_content]: hide === true,
            [styles.content]: hide === false,
          })}
        >
          <Card
            alignment="flex-start"
            className={styles.fighter_card}
            border={"solid 1px blue"}
            borderImage={"linear-gradient(to top right, darkred, red) 1"}
            content={<Fighter fighter={red} />}
          />
          <Card
            alignment="flex-start"
            className={styles.fighter_card}
            border={"solid 1px blue"}
            borderImage={"linear-gradient(to top right, darkblue, blue) 1"}
            content={<Fighter fighter={blue} />}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.skeleton_header}>
        <div className={styles.skeleton_fake_content}></div>
      </div>
    );
  }
}
