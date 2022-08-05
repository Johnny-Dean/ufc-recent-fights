import RecordTable from "../Fighter/RecordTable/RecordTable";
import PhysicalStats from "../Fighter/PhysicalStats/PhysicalStats";
import Card from "../Cards/Card/Card";
import styles from "./Fighter.module.css";
import { StrikingStats, GroundStats } from "./FightingStats/FightingStats";
import cn from "classnames";
import { Ground, PastFight, Physical, Striking } from "../../types";

interface Props {
  name: string;
  physical: Physical;
  stats: {
    striking: Striking;
    ground: Ground;
  };
  record: Array<PastFight>;
}

// name, physical, stats, record
export default function Fighter({ name, physical, stats, record }: Props) {
  return (
    <div className={styles.info_grid}>
      <h1 className={styles.header}>{name}</h1>

      <div
        className={cn({
          [styles.physical]: true,
        })}
      >
        <Card content={<PhysicalStats {...physical} />} />
      </div>

      <div
        className={cn({
          [styles.striking]: true,
        })}
      >
        <Card width={"14.5em"} content={<StrikingStats {...stats} />} />
      </div>

      <div
        className={cn({
          [styles.ground]: true,
        })}
      >
        <Card content={<GroundStats {...stats} />} />
      </div>
      {/* Find a way to display a no ufc fight alert with proper width */}
      {record.length !== 0 && (
        <div className={styles.record}>
          <Card content={<RecordTable record={record} />} />
        </div>
      )}
    </div>
  );
}
