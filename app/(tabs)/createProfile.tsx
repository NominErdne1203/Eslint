'use client';
import { BlurView } from 'expo-blur';
// import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView } from 'react-native';

import { useUpdateUserMutation } from '@/graphql/generated';

export default function CreateProfile(): React.ReactNode {
  const [name, setName] = useState('');

  const [UpdateUserMutation, { data, loading, error }] = useUpdateUserMutation();

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;

  // const handleName = async (): Promise<void> => {
  //   await createUserMutation({
  //     variables: {
  //       input: {
  //         name: name,
  //       },
  //     },
  //   });
  //   if (email === '' || password === '') {
  //     return alert('Please enter email and password');
  //   }
  // }

  const signUp2 = async (): Promise<void> => {
    await UpdateUserMutation({
      variables: {
        input: {
          name: name,
          id: '',
        },
      },
    });
    if (name === '') {
      return alert('Please enter your name');
    } else {
      router.push('/(tabs)/two');
    }
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
          {/* <Text>Create Profile</Text> */}
          <BlurView intensity={100} style={styles.blurContainer}>
            <View style={{ flexDirection: 'column' }}>
              <Text onPress={() => router.push('../sign-up')} style={{ top: -100, left: -15 }}>
                <View>
                  <Image
                    width={200}
                    height={200}
                    source={require('../../assets/images/icons8-back-30.png')}
                  />
                </View>
              </Text>

              <Text style={{ fontSize: 30, color: ' #000', marginBottom: 30, textAlign: 'center' }}>
                Create Profile
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
              placeholder="Enter name"
              value={name}
              onChange={(event) => setName(event.nativeEvent.text)}
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
                onPress={() => signUp2}>
                Next
              </Text>
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
