'use client';
import { BlurView } from 'expo-blur';
// import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView } from 'react-native';

import { useUpdateUserMutation } from '@/graphql/generated';
import { useCurrentUser } from '@/hooks/useCurrentUser';

// import { useUpdateUserMutation } from '@/graphql/generated';

export default function CreateProfile(): React.ReactNode {
  const { setUser } = useCurrentUser();
  const [name, setName] = useState('');
  const [blur, setBlur] = useState(true);
  const searchParams = useGlobalSearchParams();
  console.log(JSON.stringify(searchParams, null, 2));

  // const [UpdateUserMutation, { data, loading, error }] = useUpdateUserMutation();
  const [updateUserMutaion, { data, loading, error }] = useUpdateUserMutation();

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error.message}</Text>;

  const handleName = async (): Promise<void> => {
    console.log('running');
    setBlur(false);
    await updateUserMutaion({
      variables: {
        input: {
          id: searchParams.userId as string,
          name,
          password: '',
          image: '',
          bio: ''
        },
      },
      onCompleted: ({ updateUser }) => {
        console.log(JSON.stringify(updateUser, null, 2));
        setUser(updateUser);
      },
    });
    if (name === '') {
      return alert('Please enter your name');
    } else {
      router.push('../two');
    }

    console.log(data);
  };

  const Options = (): React.JSX.Element => {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
            {/* <Text>Create Profile</Text> */}
            <BlurView intensity={100} style={styles.blurContainer}>
              <View style={{ flexDirection: 'column' }}>
                <Text onPress={() => setBlur(true)}>
                  <View>
                    <Image
                      width={200}
                      height={200}
                      source={require('../../assets/images/icons8-back-30.png')}
                    />
                  </View>
                </Text>

                <Text
                  style={{ fontSize: 30, color: ' #000', marginBottom: 30, textAlign: 'center' }}>
                  Choose one
                </Text>
              </View>
              <Text
                style={{
                  width: 250,
                  borderColor: '#FF70BC',
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 30,
                  color: '#000',
                }}>
                Tejeegch
              </Text>
              <Text
                style={{
                  width: 250,
                  borderColor: '#FF70BC',
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: 30,
                  color: '#000',
                }}>
                tureeslegch
              </Text>
            </BlurView>
          </LinearGradient>
        </SafeAreaView>
      </View>
    );
  };

  // const handleSignUp = async (): Promise<void> => {
  //   await UpdateUserMutation({
  //     variables: {
  //       input: {
  //         name: name,
  //         id: '',
  //       },
  //     },
  //   });
  //   if (name === '') {
  //     return alert('Please enter your name');
  //   } else {
  //     router.push('../two');
  //   }
  //   console.log(data);
  // };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
          {/* <Text>Create Profile</Text> */}
          {blur && (
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
                <Text
                  style={{ fontSize: 30, color: ' #000', marginBottom: 30, textAlign: 'center' }}>
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
                  onPress={handleName}>
                  Next
                </Text>
              </View>
            </BlurView>
          )}
          {!blur && Options()}
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
