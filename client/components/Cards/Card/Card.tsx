import styles from "./Card.module.css";

export default function Card({
  content,
  width = "auto",
  color = "rgba(72, 72, 72, 0.5)",
  border = "",
  borderImage = "",
  alignment = "",
}: any) {
  return (
    <div
      className={styles.card}
      style={{
        width: `${width}`,
        backgroundColor: color,
        border: border,
        borderImage: borderImage,
        alignSelf: alignment,
      }}
    >
      {content}
    </div>
  );
}
