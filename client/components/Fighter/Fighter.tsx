import RecordTable from "../Fighter/RecordTable/RecordTable";
import PhysicalStats from "../Fighter/PhysicalStats/PhysicalStats";
import Card from "../Cards/Card/Card";
import styles from "./Fighter.module.css";
import { StrikingStats, GroundStats } from "./FightingStats/FightingStats";
import cn from "classnames";
export default function Fighter({ fighter }: any) {
  return (
    <div className={styles.info_grid}>
      <h1 className={styles.header}>{fighter.name}</h1>

      <div
        className={cn({
          [styles.physical]: true,
        })}
      >
        <Card content={<PhysicalStats {...fighter.physical} />} />
      </div>

      <div
        className={cn({
          [styles.striking]: true,
        })}
      >
        <Card width={"14.5em"} content={<StrikingStats {...fighter.stats} />} />
      </div>

      <div
        className={cn({
          [styles.ground]: true,
        })}
      >
        <Card content={<GroundStats {...fighter.stats} />} />
      </div>
      {/* Find a way to display a no ufc fight alert with proper width */}
      {fighter.record.length !== 0 && (
        <div className={styles.record}>
          <Card content={<RecordTable record={fighter.record} />} />
        </div>
      )}
    </div>
  );
}
