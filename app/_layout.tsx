import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Stack } from 'expo-router';
import { View } from 'react-native';
export default function RootLayoutNav(): React.JSX.Element {
  const client = new ApolloClient({
    uri: 'http://192.168.12.48:3000/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <View style={{ flex: 1 }}>
        <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          {/* <Stack.Screen name="assets/images" /> */}
        </Stack>
      </View>
    </ApolloProvider>
  );
}
