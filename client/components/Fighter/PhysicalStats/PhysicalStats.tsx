import { Physical } from "../../../types";

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
    // Would a better practice be to generate these ? I dont know
    <div>
      <h1>Height: {height ? cm_ft_inch(height) : "N/A"}</h1>
      <h1>Reach: {reach ? reach : "N/A"}</h1>
      <h1>Weight: {weight ? weight : "N/A"}</h1>
      <h1>Age: {age ? age : "N/A"}</h1>
    </div>
  );
}
