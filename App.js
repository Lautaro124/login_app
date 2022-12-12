import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Dimensions, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseConfig } from './firebase-config'
import Background from './assets/bacground.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const firebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(firebaseApp)

  const createAcount = () => {
    createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user
        Alert.alert('Hello ' + user.displayName != null ? user.displayName : user.email)
      })
      .catch((error) => {
        if (error.message.includes('auth/email-already-in-use')) {
          Alert.alert('Email already exists');
        }
        else {
          Alert.alert(error.message)
        }
      })
  }

  return (
    <View style={styles.background}>
      <StatusBar style='auto' />
      <Image
        source={Background}
        style={styles.image}
      />
      <View style={styles.container}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps='always'
          style={styles.containerForm}>
          <Text style={styles.title}>Sign up</Text>
          <View style={styles.form}>
            <TextInput
              placeholder={'Write your email address'}
              style={styles.input}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder={'Write your password'}
              style={styles.input}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={createAcount}
            >
              <Text style={styles.textButton}>
                Sing up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  image: {
    width: '100%',
    height: deviceHeight / 1.5,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: deviceWidth,
    height: '40%',
    backgroundColor: '#f1f1f1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 2.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerForm: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold',
    textAlign: 'left',
    marginTop: 30,
    marginBottom: 20,
  },
  form: {
    width: '100%',
    height: '60%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dbdbdb',
    padding: 12,
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
    backgroundColor: 'black',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
  }
})
