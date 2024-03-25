import { Tabs } from 'expo-router';

const TabLayout: React.FC = () => {
  return (
    <Tabs initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="login-sign" />
      <Tabs.Screen name="sign-up" />
      <Tabs.Screen name="two" />
      {/* <Tabs.Screen name="SignUppage" /> */}
      {/* <Tabs.Screen name="posts" /> */}
    </Tabs>
  );
};

export default TabLayout;
