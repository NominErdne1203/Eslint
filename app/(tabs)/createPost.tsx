// import ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

// import { FullWindowOverlay } from 'react-native-screens';

export default function CreatePost(): React.JSX.Element {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChangeText = (text: React.SetStateAction<string>): void => {
    setText(text);
  };
  const CreatePost = (): void => {
    setShowModal(true);
  };

  const handleSubmit = (): void => {
    if (text.trim()) {
      console.log('Post submitted:', CreatePost);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.email}>CreatePost</Text>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent:"center",
          alignItems: 'center',
          marginHorizontal: 15,
          backgroundColor: '#FFC9E6',
          width: '100%',
        }}>
        <Image
          style={{ width: 50, height: 50, margin: 10, borderRadius: 100 }}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
          }}
        />
        <TextInput
          style={{
            borderColor: '#000',
            width: 240,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20,
          }}
          value={text}
          onChangeText={handleChangeText}
          placeholder="Create post"
          onSubmitEditing={handleSubmit}>
          CreatePost
        </TextInput>
      </View>

      {showModal && (
        <View>
          <Text style={{ borderWidth: 1, borderRadius: 5, padding: 10 }}>{text}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ECB4d0',
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
