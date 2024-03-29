import { Ground, Striking } from "../../../types";
import styles from "./FightingStats.module.css";

interface FightStatsProps {
  striking: Striking;
  ground: Ground;
}

function StrikingStats({ striking }: FightStatsProps) {
  return (
    <div className={styles.container}>
      <div>
        <p>Strikes Per Min: </p>
        <p>Strikes Absorbed: </p>
        <p>Strike Accuracy: </p>
        <p>Strike Defense: </p>
      </div>
      <div>
        <p>{striking.strikes_per_minute}</p>
        <p>{striking.strikes_absorbed}</p>
        <p>{striking.strike_accuracy}%</p>
        <p>{striking.strike_defense}%</p>
      </div>
    </div>
  );
}

function GroundStats({ ground }: FightStatsProps) {
  return (
    <div className={styles.container}>
      <div>
        <p>Takedown Average: </p>
        <p>Takedown Accuracy: </p>
        <p>Takedown Defense: </p>
        <p>Submissions Attempt: </p>
      </div>
      <div>
        <p>{ground.takedown_average}</p>
        <p>{ground.takedown_accuracy}%</p>
        <p>{ground.takedown_defense}%</p>
        <p>{ground.submissions_attempted}%</p>
      </div>
    </div>
  );
}

export { StrikingStats, GroundStats };
