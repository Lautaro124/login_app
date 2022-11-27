import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseConfig } from './src/config/firebase'

export default function App () {
  const firebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(firebaseApp)

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign in with your email account</Text>
      <Input placeholder='Write your email' />
      <Input placeholder='Write your password' />
      <TouchableOpacity >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

function Input ({ placeholder }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
    />
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
