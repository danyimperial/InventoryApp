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
  const { userData } = route.params || {};

  const userLogin = {
    email: "admin@example.com",
    password: "admin123"
  };

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
  }

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
    if (
      (email === userData?.email && password === userData?.password) ||
      (email === userLogin.email && password === userLogin.password)
    ) {
      navigation.navigate('DashBoard', { userData: { email, password } });
    }
    if (!password) {
      setInputError("Password is required.");
    }
    if (!email) {
      setInputError("Email is required.");
    }

  };

  // Navigation
  const handleWelcome = () => {
    navigation.navigate('WelcomeScreen');
  };
  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <ImageBackground source={require('../assets/lab.jpg')} style={LoginPageStyle.Container}>
      <View style={LoginPageStyle.Container}>
        <Image style={LoginPageStyle.Logo} source={require('../assets/Rhine_Lab.webp')} />
        <Text style={LoginPageStyle.WelcomeText}>Welcome back</Text>
        {/* Email Input */}
        <TextInput
          style={[
            LoginPageStyle.InputEmail,
            emailError ? LoginPageStyle.ErrorHandler : null,
            { borderColor: emailError ? 'red' : 'black' }
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
            passError ? LoginPageStyle.ErrorHandler : null,
            { borderColor: passError ? 'red' : 'black' }
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

        {/* Register Button */}
        <Text style={LoginPageStyle.StaticText}>
          Don't Have An Account?{" "}
          <Text style={LoginPageStyle.RegisterText} onPress={handleRegister}>
            Register
          </Text>
        </Text>

        {/* Back Button */}
        <TouchableOpacity
          style={LoginPageStyle.BackButton}
          onPress={handleWelcome}
        >
          <Text style={LoginPageStyle.BackText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
