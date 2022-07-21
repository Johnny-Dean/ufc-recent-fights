import { getAllEventIds, getEventDetails } from "../../lib/event";
import { FightEvent } from "../../types";

export default function Event({ eventData }: any) {
  return (
    <div>
      <h1>{eventData.findFightCardDetails.title}</h1>
      {eventData.findFightCardDetails.fights.map((fight: any) => (
        <h1 key={fight.blue.name + fight.red.name}>
          {fight.blue.name} vs {fight.red.name}
        </h1>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const request = await getAllEventIds();
  const data = await request.data;
  let paths = data.allFightCards.map((event: FightEvent) => ({
    params: { id: event.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const request = await getEventDetails(params.id);
  const eventData = await request.data;
  return {
    props: {
      eventData,
    },
  };
}
