import { PastFight } from "../../../types";
import styles from "./RecordTable.module.css";
import cn from "classnames";
function FightRecordRow({ outcome, opponent, method, round, time }: PastFight) {
  return (
    <tbody>
      <tr>
        <td
          className={cn({
            [styles.win]: outcome === "Win",
            [styles.loss]: outcome === "Loss",
            [styles.no_contest]: outcome === "Nc",
            [styles.win_loss_indicator]: true,
          })}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="65" r="10" />
          </svg>
        </td>
        <td className={styles.table_align_left}>{outcome}</td>
        <td className={styles.table_align_left}>{opponent}</td>
        <td className={styles.table_align_left}>{method}</td>
        <td>{round.toString()}</td>
        <td>{time}</td>
      </tr>
    </tbody>
  );
}

interface RecordTableProps {
  record: PastFight[];
}
export default function RecordTable({ record }: RecordTableProps) {
  return (
    <table className={styles.table}>
      {record.slice(0, 5).map((fight: PastFight, index: number) => (
        <FightRecordRow key={index + 1} {...fight} />
      ))}
    </table>
  );
}
