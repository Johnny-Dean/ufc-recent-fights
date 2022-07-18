import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";

const AllEventsQuery = gql`
  query AllEvents {
    allEvents {
      Title
    }
  }
`;

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(AllEventsQuery);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  // eslint-disable-next-line react/jsx-key
  return data.allEvents.map((e: { Title: string }) => <h1>{e.Title}</h1>);
};

export default Home;
