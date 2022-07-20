import { gql } from "@apollo/client";
import apolloClient from "./apollo";

const AllEventsIdQuery = gql`
  query AllFightCards {
    allFightCards {
      id
    }
  }
`;

export function getAllEventIds() {
  // Research better way besides interfaces to define this ?? probably an inline way
  // Figure out what to do about all the anys because we are entirely cirumventing typescript
  let result: any = [];
  const data = apolloClient
    .query({
      query: AllEventsIdQuery,
    })
    .then((res: any) => {
      console.log(result);
      res.data.allFightCards.map((event: any) =>
        result.push({ params: { id: `${event.id}` } })
      );
    })
    .catch((err) =>
      console.log("Error fetching event ids for dynamic routes: " + err)
    );
}
