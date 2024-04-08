import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native';

import { useCurrentUser } from '@/hooks/useCurrentUser';

export default function LoginPage(): React.ReactNode {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useCurrentUser();

  const searchParams = useGlobalSearchParams();
  console.log(JSON.stringify(searchParams, null, 2));

  const handleLogin = async (): Promise<void> => {
    console.log('working');
    // setBlur(false);
    if (searchParams.userId && email && password) {
      setUser({ id: searchParams.userId, email, password });
      router.push('../two');
    } else {
      console.log('asd');
    }
    console.log('pressed');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
          <BlurView intensity={100} style={styles.blurContainer}>
            <Text style={{ fontSize: 30, color: '#000', marginBottom: 30, textAlign: 'center' }}>
              Login
            </Text>
            <TextInput
              style={{
                width: 250,
                borderColor: '#FF70BC',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 30,
                color: '#000',
              }}
              placeholder="email or phone number"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={{
                width: 250,
                borderColor: '#FF70BC',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 30,
                color: '#000',
              }}
              placeholder="password"
              value={password}
              onChangeText={setPassword}
            />
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  width: 100,
                  borderColor: '#FF70BC',
                  borderWidth: 2,
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 30,
                  textAlign: 'center',
                  alignItems: 'center',
                  color: '#FF70BC',
                }}
                onPress={handleLogin}>
                Done
              </Text>
              <Text onPress={() => router.push('../sign-up')}>Create Account?</Text>
            </View>
          </BlurView>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  blurContainer: {
    flex: 1,
    top: 20,
    margin: 90,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
});
