import RecordTable from "../Fighter/RecordTable/RecordTable";
import PhysicalStats from "../Fighter/PhysicalStats/PhysicalStats";
import Card from "../Cards/Card/Card";
import styles from "./Fighter.module.css";
export default function Fighter({ fighter }: any) {
  return (
    <div className={styles.info_grid}>
      <h1 className={styles.header}>{fighter.name}</h1>
      <div className={styles.container}>
        <Card content={<PhysicalStats {...fighter.physical} />} />
      </div>
      <div className={styles.container}>
        <Card
          className={styles.stats}
          content={<PhysicalStats {...fighter.physical} />}
        />
      </div>
      <div className={(styles.container, styles.record)}>
        <Card
          width={"26em"}
          content={
            fighter.record.length === 0 ? (
              <p>No UFC Fights</p>
            ) : (
              <RecordTable record={fighter.record} />
            )
          }
        />
      </div>
    </div>
  );
}
