import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';
// import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import {  useGetUserQuery, useUpdateUserMutation } from '@/graphql/generated';

export default function TwoJapa(): React.JSX.Element {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('add bio');
  const [image, setImage] = useState(
    'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isBioe, setIsBioe] = useState(false);

  // const { data, loading, error } = useUpdateUserMutation();

  // if (loading) return <Text>Loading</Text>;
  // if (error) return <Text>{error.message}</Text>;
  
  // Fetch user data using useGetUserQuery
  const { data: userData, loading: userDataLoading } = useGetUserQuery();

  // Set name, bio, and image when component mounts
  useEffect(() => {
    if (!userDataLoading && userData?.getUser) {
      setName(userData.getUser.name);
      // setImage(userData.getUser.image);
    }
  }, [userData, userDataLoading]);


  // const SaveImage = async (): Promise<void> => {
  //   await UpdateUserMutation({
  //     variables: {
  //       input: {
  //         image,
  //         id: ''
  //       },
  //     },
  //   });
  //   console.log(data);
  // };

  
  const handleBioChange = (text: React.SetStateAction<string>): void => {
    setBio(text);
    setIsBioe(true);
  };
  const handleChangeText = (text: React.SetStateAction<string>): void => {
    setName(text);
  };

  const handleDonePress = (): void => {
    if (bio === '') {
      setIsBioe(true);
    } else {
      // setBio(bio)
      setIsBioe(!isBioe);
    }
  };

  const handleInputFocus = (): void => {
    setIsBioe(isBioe);
  };

  const handleEdit = (): void => {
    setIsEditing(!isEditing);
  };

  const handleSave = (): void => {
    setIsEditing(!isEditing);
  };

  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    // await UpdateUserMutation({
    //   variables: {
    //     input: {
    //       image,
    //       id: '',
    //     },
    //   },
    // });
    // console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Link style={{ right: 100, fontSize: 20 }} href="../">
          BACK
        </Link>
        <Text style={{ fontSize: 35, color: '#797979' }}>Profile</Text>
      </View>
      <TouchableOpacity onPress={pickImage}>
        <Image
          style={{ width: 150, height: 150, borderRadius: 100, alignItems: 'center' }}
          source={{
            uri: `${image}`,
          }}
        />
      </TouchableOpacity>
      {isEditing ? (
        <TextInput style={styles.input} onChangeText={handleChangeText} value={name} />
      ) : (
        <Text style={styles.name}>{name}</Text>
      )}
      {isEditing ? <Text onPress={handleSave}>Save</Text> : <Text onPress={handleEdit}>edit</Text>}
      <TextInput
        placeholder={bio}
        onChangeText={handleBioChange}
        value={bio}
        multiline
        numberOfLines={4}
        onFocus={handleInputFocus}
      />
      {isBioe && (
        <Text style={{ borderRadius: 10 }} onPress={handleDonePress}>
          Done
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 50,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
