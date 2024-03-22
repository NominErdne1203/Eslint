'use client';
import { useCreateUserMutation } from '@/graphql/generated';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function SignUpPage(): React.ReactNode {
  const [blur, setBlur] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserMutation, { data, loading, error }] = useCreateUserMutation();

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;

  const handleSignUp = async (): Promise<void> => {
    await createUserMutation({
      variables: {
        input: {
          email,
          password,
          completed: false,
        },
      },
    });
    console.log(data);
  };

  // const handleChangeText = (text: React.SetStateAction<string>): void => {
  //   // setName(text);
  // }
  // const { email }
  // const handleSignUp = async () => {
  //   await createUserMutation({
  //     input: {
  //     }
  //   });

  const CreateProfile = (): React.JSX.Element => {
    return (
      <View>
        <BlurView intensity={100} style={styles.blurContainer}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 20, top: -50 }} onPress={() => setBlur(true)}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../../assets/images/back.svg')}
              />
            </Text>
            <Text style={{ fontSize: 30, color: ' #000', marginBottom: 30, textAlign: 'center' }}>
              Create Account
            </Text>
          </View>
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
            value={password}
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
              onPress={() => handleSignUp}>
              Next
            </Text>
            <Text onPress={() => router.push('../login')}>Already have an Account?</Text>
          </View>
        </BlurView>
      </View>
    );
  };

  return (
    // <ImageBackground
    //   source={require('../../assets/images/backgroundImg.jpg')}
    //   style={styles.backgroundImage}>
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
          {blur && (
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
                  onPress={() => setBlur(false)}>
                  Next
                </Text>
                <Text onPress={() => router.push('../login')}>Already have an Account?</Text>
              </View>
            </BlurView>
          )}
          {!blur && CreateProfile()}
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
