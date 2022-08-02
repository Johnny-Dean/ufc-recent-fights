import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://mma-fights-backend.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default apolloClient;
