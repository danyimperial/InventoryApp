import React, { useState } from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { LoginPageStyle } from '../styles/LoginPageStyle';

const LoginScreen = ({ route, navigation }) => {
  const { userData } = route.params || {};  // Receive userData from RegisterScreen or any other source
  
  // Error Handling => Email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const validEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  // Error Handling => Password
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const validPass = (text) => {
    setPassword(text);
    if (text.length < 8) {
      setPassError("Password must at least be 8 characters long.");
    } else {
      setPassError("");
    }
  };

  const [inputError, setInputError] = useState("");

  const handleLogin = () => {
    setInputError("");

    // Validate email and password
    if (email === userData?.email && password === userData?.password) {
      navigation.navigate('ProfileScreen', { userData });  // Pass the userData to ProfileScreen
    } else {
      setInputError("Invalid email or password.");
    }
  };

  const handleHome = () => {
    navigation.navigate('HomePageScreen');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpeg')}
      style={LoginPageStyle.Container}
      blurRadius={20}
    >
      <View style={LoginPageStyle.Container}>
        <Image
          style={LoginPageStyle.Logo}
          source={require('../assets/logo.webp')}
        />

        {/* Email Input */}
        <TextInput
          style={[ 
            LoginPageStyle.InputEmail,
            emailError ? LoginPageStyle.ErrorHandler : null
          ]}
          placeholder="Email"
          value={email}
          onChangeText={validEmail}
          keyboardType="email-address"
        />
        {emailError ? <Text style={LoginPageStyle.ErrorHandler}>{emailError}</Text> : null}

        {/* Password Input */}
        <TextInput
          secureTextEntry={true}
          style={[ 
            LoginPageStyle.InputPassword,
            passError ? LoginPageStyle.ErrorHandler : null
          ]}
          placeholder="Password"
          value={password}
          onChangeText={validPass}
          keyboardType="default"
        />
        {passError ? <Text style={LoginPageStyle.ErrorHandler}>{passError}</Text> : null}

        {/* Login Button */}
        <TouchableOpacity
          style={LoginPageStyle.LoginButton}
          onPress={handleLogin}
        >
          <Text style={LoginPageStyle.LoginText}>LOGIN</Text>
        </TouchableOpacity>
        {inputError ? <Text style={LoginPageStyle.ErrorHandler}>{inputError}</Text> : null}

        {/* Back Button */}
        <TouchableOpacity
          style={LoginPageStyle.BackButton}
          onPress={handleHome}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;
