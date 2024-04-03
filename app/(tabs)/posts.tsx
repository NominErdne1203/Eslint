// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { FullWindowOverlay } from 'react-native-screens';

export default function PostPage(): React.JSX.Element {
  // const [text, setText] = useState('');
  // const [showModal, setShowModal] = useState(false);

  // const handleChangeText = (text: React.SetStateAction<string>): void => {
  //   setText(text);
  // };
  // const CreatePost = (): void => {
  //   setShowModal(true);
  // };

  // const handleSubmit = (): void => {
  //   if (text.trim()) {
  //     console.log('Post submitted:', CreatePost);
  //     setText('');
  //   }
  // };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
        <Text style={styles.email}>Cute Paws</Text>
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
          <Text
            style={{
              borderColor: '#000',
              width: 240,
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 20,
            }}
            onPress={() => router.push('../createPost')}
            // value={text}
            // onChangeText={handleChangeText}
            // placeholder="Create post"
            // onSubmitEditing={handleSubmit}
          >
            CreatePost
          </Text>
        </View>

        {/* {showModal && (
        <View>
          <Text style={{ borderWidth: 1, borderRadius: 5, padding: 10 }}>{text}</Text>
        </View>
      )} */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ECB4d0',
    paddingTop: 50,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradientContainer: {
    flex: 1,
    // justifyContent: 'center',
    borderRadius: 20,
  },
});
