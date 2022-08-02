import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://ufc-recent-fights-production.up.railway.app",
  cache: new InMemoryCache(),
});

export default apolloClient;
