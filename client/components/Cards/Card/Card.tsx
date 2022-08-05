import styles from "./Card.module.css";

interface Props {
  content: React.ReactNode;
  width: string;
  color: string;
  border: string;
  borderImage: string;
  alignment: string;
}
export default function Card({
  content,
  width = "auto",
  color = "rgba(72, 72, 72, 0.5)",
  border = "",
  borderImage = "",
  alignment = "",
}: Props) {
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
