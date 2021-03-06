import React from "react";
import { Fight } from "../types";
import styles from "../styles/fightcardpreview.module.css";
import Link from "next/link";

interface FightCardProps {
  id: string;
  title: string;
  main: Fight;
  comain: Fight;
}
export default function FightCard(props: FightCardProps) {
  return (
    <Link href={`/events/${props.id}`}>
      <a>
        <div className={styles.fightcard}>
          <h1>{props.title}</h1>
          <p className="main">
            {props.main.red} vs {props.main.blue}
          </p>
        </div>
      </a>
    </Link>
  );
}
