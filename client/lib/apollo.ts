import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://mma-fights-backend.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default apolloClient;
