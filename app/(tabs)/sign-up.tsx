'use client';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useCreateUserMutation } from '@/graphql/generated';

export default function SignUpPage(): React.ReactNode {
  const router = useRouter();
  // const [blur, setBlur] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  const [createUserMutation, { data, loading, error }] = useCreateUserMutation();

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;

  const handleSignUp = async (): Promise<void> => {
    await createUserMutation({
      variables: {
        input: {
          email: email,
          password: password,
          name: '',
          image: '',
          bio: ''
        },
      },
      onCompleted: ({ createUser }) => {
        router.push(`../createProfile?userId=${createUser.id}`);
      },
    });
    if (email === '') {
      return alert('Please enter a valid email address');
    }

    if (password === '') {
      return alert('Please enter a valid password.');
    }
    // else if (!email.includes('@') || !email.endsWith('.com')) {
    //   return alert('Please enter a valid email address');
    // } else if (password.length !== 8 || password.length < 8) {
    //   return alert('Password must be 8 characters long at least');
    // }
    console.log(data)
    console.log(error)
  };

  return (
    // <ImageBackground
    //   source={require('../../assets/images/backgroundImg.jpg')}
    //   style={styles.backgroundImage}>
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
          {/* {blur && ( */}
          <BlurView intensity={100} style={styles.blurContainer}>
            <Text style={{ fontSize: 30, color: ' #000', marginBottom: 30, textAlign: 'center' }}>
              Create Account
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
              onChange={(event) => setEmail(event.nativeEvent.text)}
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
              onChange={(event) => setPassword(event.nativeEvent.text)}
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
                onPress={handleSignUp}>
                Next
              </Text>
              <Text onPress={() => router.push('../')}>Already have an Account?</Text>
            </View>
          </BlurView>
          {/* )} */}
          {/* {!blur && CreateProfile()} */}
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
    // width: '80%',
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
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
//  export default handleSignUp;
