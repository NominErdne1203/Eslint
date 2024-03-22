import { Tabs } from 'expo-router';

const TabLayout: React.FC = () => {
  return (
    <Tabs initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="LoginPage" />
      <Tabs.Screen name="TwoJapa" />
      <Tabs.Screen name="loginsign" />
      <Tabs.Screen name="SignUppage" />
      <Tabs.Screen name="posts" />
    </Tabs>
  );
};

export default TabLayout;
