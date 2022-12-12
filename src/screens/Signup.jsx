import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Signup = (auth) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign up with your email account</Text>
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
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})