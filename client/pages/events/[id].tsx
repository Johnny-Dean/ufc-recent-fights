import type { NextPage } from "next";

export default function Event() {
  return <h1>hey</h1>;
}

export async function getStaticPaths() {
  // ex:
  // /ufc286
  // /ufcfightlawlerdiaz
}

export async function getStaticProps(props: Event) {}
