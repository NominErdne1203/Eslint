// import ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

// import { FullWindowOverlay } from 'react-native-screens';

export default function CreatePost(): React.JSX.Element {
  const [title, setTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  // const [image, setImage] = useState();

  const handleChangeText = (title: React.SetStateAction<string>): void => {
    setTitle(title);
  };
  const CreatePost = (): void => {
    setShowModal(true);
  };

  const handleSubmit = (): void => {
    // if (text.trim()) {
    //   console.log('Post submitted:', CreatePost);
    //   setText('');
    // }
    console.log('Post submitted:', CreatePost);
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.email}>CreatePost</Text>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       // justifyContent:"center",
    //       alignItems: 'center',
    //       marginHorizontal: 15,
    //       backgroundColor: '#FFC9E6',
    //       width: '100%',
    //     }}>
    //     <Image
    //       style={{ width: 50, height: 50, margin: 10, borderRadius: 100 }}
    //       source={{
    //         uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
    //       }}
    //     />
    //     <TextInput
    //       style={{
    //         borderColor: '#000',
    //         width: 240,
    //         borderWidth: 1,
    //         paddingHorizontal: 10,
    //         paddingVertical: 5,
    //         borderRadius: 20,
    //       }}
    //       value={text}
    //       onChangeText={handleChangeText}
    //       placeholder="Create post"
    //       onSubmitEditing={handleSubmit}>
    //       CreatePost
    //     </TextInput>
    //   </View>

    //   {showModal && (
    //     <View>
    //       <Text style={{ borderWidth: 1, borderRadius: 5, padding: 10 }}>{text}</Text>
    //     </View>
    //   )}
    // </View>
    <View style={styles.container}>
      <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Image
            width={200}
            height={200}
            source={require('../../assets/images/icons8-back-30.png')}
          />
          <Text style={styles.email}>CreatePost</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 140,
            }}>
            Next
          </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Image
            style={{ width: 50, height: 50, margin: 10,marginLeft: 20 , borderRadius: 100 }}
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
        <View style={{ width: '100', height: 500}}>
          <TextInput
            style={{
              paddingHorizontal: 20,
              paddingVertical: 40,
              fontSize: 20,
            }}
            // value={title}
            onChangeText={handleChangeText}
            placeholder="Create post"
            onSubmitEditing={handleSubmit}
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
});
