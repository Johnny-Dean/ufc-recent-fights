import React from "react";

import { Fight } from "../../../types";
import styles from "./EventCard.module.css";
import Link from "next/link";

function getLastName(fullName: string) {
  return fullName.split(" ", 2)[1];
}

interface EventCardProps {
  id: string;
  org: string;
  title: string;
  main: Fight;
  comain: Fight;
}
export default function EventCard({
  id,
  title,
  org,
  main,
  comain,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <a>
        <div className={styles.fightcard}>
          <h1>{org}</h1>
          <h1>{title}</h1>
          <p className={styles.main}>
            {getLastName(main.red)} vs {getLastName(main.blue)}
          </p>
          <p className={styles.comain}>
            {getLastName(comain.red)} vs {getLastName(comain.blue)}
          </p>
        </div>
      </a>
    </Link>
  );
}
