import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseConfig } from './firebase-config'

export default function App () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const firebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(firebaseApp)

  const createAcount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
          console.log('User created')
          const user = userCredentials.user
          console.log(user.email)
          Alert.alert('Hello '+user.email)
        })
      .catch((error) => {
        console.log('error')
        Alert.alert(error.message)
      })
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign in with your email account</Text>
      <TextInput
        placeholder={'Write your email address'}
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder={'Write your password'}
        style={styles.input}
        onChangeText= {setPassword}
      />
      <TouchableOpacity onPress={createAcount}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30.0,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 15.0,
    fontWeight: 'bold',
    color: 'grey',
  },
  input: {
    backgroundColor: '#fff',
    minWidth: '80%',
    height: 50,
    borderWidth: 3,
    borderColor: '#dbdbdb',
    padding: 12,
    borderRadius: 15,
    margin: 5,
  }
})
