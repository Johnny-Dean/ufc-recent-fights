import { PastFight } from "../../types";

function RowHeader() {
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

function FightRecordRow({ outcome, opponent, method, round, time }: PastFight) {
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

interface RecordTableProps {
  record: [PastFight];
}
export default function RecordTable({ record }: RecordTableProps) {
  return (
    <table>
      <RowHeader />
      {record.map((fight: PastFight, index: number) => (
        <FightRecordRow key={index + 1} {...fight} />
      ))}
    </table>
  );
}
