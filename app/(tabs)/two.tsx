import * as ImagePicker from 'expo-image-picker';
// import { Link } from 'expo-router';
// import { stringify } from 'querystring';
import { useGlobalSearchParams, Link, } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { useUpdateUserMutation } from '@/graphql/generated';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export default function TwoJapa(): React.JSX.Element {
  const { setUser, user } = useCurrentUser();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('add bio');
  const [image, setImage] = useState(
    'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isBioe, setIsBioe] = useState(false);
  const searchParams = useGlobalSearchParams();
  console.log(JSON.stringify(searchParams, null, 2));

  // const router = useRouter();

  // const [UpdateUserMutation, { data, loading, error }] = useUpdateUserMutation();
  const [UpdateUserMutaion, { data, loading, error }] = useUpdateUserMutation();

  if (loading) return <Text>Loading</Text>
  if (error) return <Text>{error.message}</Text>;
  

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [localUser, setLocalUser] = useState(() => {
    if (user) return user;
    return {
      id: '',
      name: '',
      email: '',
      image: '',
      bio: '',
    };
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks  
  useEffect(() => {
    if (user) {
      setName(user?.name || '');
      setBio(user?.bio || '');
      setImage(user?.image || '');
      setLocalUser(user);
    }
  }, [user]);

  // const SaveImage = async (): Promise<void> => {
  //   console.log('running');
  //   setBlur(false);
  //   await updateUserMutaion({
  //     variables: {
  //       input: {
  //         id: searchParams.userId as string,
  //         name,
  //         password: '',
  //         image: '',
  //         bio: '',
  //       },
  //     },
  //     onCompleted: ({ updateUser }) => {
  //       console.log(JSON.stringify(updateUser, null, 2));
  //       setUser(updateUser);
  //     },
  //   });
  //   if (name === '') {
  //     return alert('Please enter your name');
  //   } else {
  //     router.push('../two');
  //   }

  //   console.log(data);
  // };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (user) {
      setName(user?.name || '');
      // setBio(user?.bio!= null? `${user?.bio}` : '');
      setImage(user?.image || '');
    }
  }, [user]);

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
    localUser.name = name;
    localUser.image = image;
    localUser.bio = bio;
    setUser(localUser);
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
    await UpdateUserMutaion({
      variables: {
        input: {
          id: searchParams.userId as string,
          image: image,
        },
      },

      onCompleted: ({ updateUser }) => {
        console.log(JSON.stringify(updateUser, null, 2));
        setUser(updateUser);
        console.log(data);
      },
    });
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
