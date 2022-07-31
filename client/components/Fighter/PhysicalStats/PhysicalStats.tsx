import { Physical } from "../../../types";
import styles from "./PhysicalStats.module.css";
function cm_ft_inch(height: number) {
  const total_inches = height / 2.54;
  const feet = Math.floor(total_inches / 12);
  const inches = Math.round(total_inches % 12);
  return `${feet}'${inches}"`;
}

export default function PhysicalStats({
  height,
  weight,
  reach,
  age,
}: Physical) {
  return (
    <div className={styles.container}>
      <div>
        <p>Height: </p>
        <p>Reach: </p>
        <p>Weight: </p>
        <p>Age: </p>
      </div>
      <div>
        <p>{height ? cm_ft_inch(height) : "N/A"}</p>
        <p>{reach ? reach : "N/A"}</p>
        <p>{weight ? weight : "N/A"}</p>
        <p>{age ? age : "N/A"}</p>
      </div>
    </div>
  );
}
