// import ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import { useCreatePostMutation } from '@/graphql/generated';

export default function CreatePost(): React.JSX.Element {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const [CreatePostMutation, { data, loading, error }] = useCreatePostMutation();

  if (loading) return <>Loading...</>;
  if (error) return <>{error.message}...</>;

  const handleSubmit = async (): Promise<void> => {
    await CreatePostMutation({
      variables: {
        input: {
          title: title,
          // postImage: image,
          id: '',
        },
      },
    });
    router.push('../posts');
    console.log(data);
    console.log(error);
  };

  const handleChangeText = (text: React.SetStateAction<string>): void => {
    setTitle(text);
  };


  // const handleSubmit = (): void => {
  //   // if (text.trim()) {
  //   //   console.log('Post submitted:', CreatePost);
  //   //   setText('');
  //   // }
  //   console.log('Post submitted:', CreatePost);
  // };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Text onPress={() => router.push('../')}>
            <Image
              width={200}
              height={200}
              source={require('../../assets/images/icons8-back-30.png')}
            />
          </Text>
          <Text style={styles.email}>CreatePost</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 140,
            }}
            onPress={handleSubmit}>
            Next
          </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Image
            style={{ width: 50, height: 50, margin: 10, marginLeft: 20, borderRadius: 100 }}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
            }}
          />
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 20,
              fontSize: 20,
            }}>
            Ner
          </Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={{
              paddingHorizontal: 20,
              paddingVertical: 40,
              fontSize: 20,
            }}
            // value={title}
            onChangeText={handleChangeText}
            placeholder="Create post"
            // onSubmitEditing={handleSubmit}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#FFC9E6',
    paddingTop: 50,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
  },
  input: {
    width: '100%',
    height: 500,
  },
});
