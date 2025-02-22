import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { LoginStyle } from "./src/styles/mainstyle";
const App = () => {
  const [username, setUsername] = useState('')
  const [firstname, setFirstName] = useState('')
  const handlePress = () => {
    console.log('Hello')
    setUsername('Letran')
    setFirstName('Cyg')
  }
  return (
    <View style={LoginStyle.container}>
      <Image
        style={LoginStyle.ImageContainer}
        source={require('./src/assets/brat.png')} />
      <TextInput
        value={username}
        style={LoginStyle.TextInput}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        value={firstname}
        style={LoginStyle.TextInput}
        onChangeText={(text) => setFirstName(text)}
      />
      <TouchableOpacity
        onPress={handlePress}>
        <Image
          style={LoginStyle.ImageContainer}
          source={require('./src/assets/brat.png')} />
        <Text>
          Click Me
        </Text>
      </TouchableOpacity>
      <Text
        style={LoginStyle.GeneralFont}>
        365 party girl
      </Text>
    </View>
  );
}

export default App;