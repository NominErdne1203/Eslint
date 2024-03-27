import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native';

import { useGetUserListQuery } from '../../graphql/generated';

export default function LoginPage(): React.ReactNode {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data, loading, error } = useGetUserListQuery();

  if (loading) return <Text>Loading</Text>;

  if (error) return <Text>Error: {error.message}</Text>;
  const handleLogin = async (): Promise<void> => {
    if (data?.getUserList[0].email === email && data?.getUserList[0].password === password) {
      router.push('../posts');
    }
  };

  return (
    // <ImageBackground
    //   source={require('../../assets/images/backgroundImg.jpg')}
    //   style={styles.backgroundImage}>
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
              onChange={() => setEmail(email)}
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
              onChange={() => setPassword(password)}
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
                onPress={() => handleLogin}>
                Done
              </Text>
              <Text onPress={() => router.push('../sign-up')}>Create Account?</Text>
            </View>
          </BlurView>
        </LinearGradient>
      </SafeAreaView>
    </View>
    // </ImageBackground>
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
