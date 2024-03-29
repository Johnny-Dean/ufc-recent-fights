import { gql } from "@apollo/client";
import apolloClient from "./apollo";

export const AllEventsQuery = gql`
  query AllEvents {
    events: allEvents {
      id
      org
      title
      fights {
        red
        blue
      }
    }
  }
`;

export async function getAllEvents() {
  return apolloClient.query({
    query: AllEventsQuery,
  });
}

const EventQuery = gql`
  query FindEvent($findEventId: ID) {
    event: findEvent(id: $findEventId) {
      title
      fights {
        red
        blue
      }
    }
  }
`;
export async function getEventDetails(id: string) {
  return apolloClient.query({
    query: EventQuery,
    variables: {
      findEventId: id,
    },
  });
}

const FightQuery = gql`
  query FindFight($firstFighter: String, $secondFighter: String) {
    Fight: findFight(
      first_fighter: $firstFighter
      second_fighter: $secondFighter
    ) {
      name
      physical {
        height
        weight
        reach
        age
      }
      stats {
        striking {
          strikes_per_minute
          strikes_absorbed
          strike_accuracy
          strike_defense
        }
        ground {
          takedown_average
          takedown_accuracy
          takedown_defense
          submissions_attempted
        }
      }
      record {
        outcome
        opponent
        method
        round
        time
      }
    }
  }
`;

export async function getFight(first_fighter: string, second_fighter: string) {
  return apolloClient.query({
    query: FightQuery,
    variables: {
      firstFighter: first_fighter,
      secondFighter: second_fighter,
    },
  });
}
