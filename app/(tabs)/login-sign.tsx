// import { Link } from 'expo-router';

import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function Loginsign(): React.ReactNode {
  return (
    // <ImageBackground
    //   source={require('../../assets/images/backgroundImg.jpg')}
    //   style={styles.backgroundImage}>

    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#FFC9E6', '#ffffff']} style={styles.gradientContainer}>
          <BlurView intensity={100} style={styles.blurContainer}>
            <Text
              style={{
                fontSize: 30,
                borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 10,
                width: 300,
                color: '#fff',
                textAlign: 'center',
              }}
              onPress={() => router.push('../zza')}>
              Login
            </Text>
            <Text style={{ textAlign: 'center' }}>Or</Text>
            <Text
              style={{
                fontSize: 30,
                borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 10,
                width: 300,
                color: '#1B85F3',
                textAlign: 'center',
              }}
              onPress={() => router.push('../sign-up')}>
              SignUp
            </Text>
          </BlurView>
        </LinearGradient>
      </SafeAreaView>
    </View>
    // {/* </ImageBackground> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  backgroundImage: { flex: 1, width: null, height: null, zIndex: 100 },
  blurContainer: {
    flex: 1,
    top: 40,
    margin: 100,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
});
