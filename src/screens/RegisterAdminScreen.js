import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { RegisterPageStyle } from '../styles/RegisterPageStyle';

const RegisterAdminScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [confirmPassError, setConfirmPassError] = useState('');

    const validEmail = (text) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const validPassword = (text) => {
        setPassword(text);
        if (text.length < 8) {
            setPassError('Password must be at least 8 characters long.');
        } else {
            setPassError('');
        }
    };

    const validConfirmPass = (text) => {
        setConfirmPassword(text);
        if (text !== password) {
            setConfirmPassError('Passwords do not match.');
        } else {
            setConfirmPassError('');
        }
    };

    const handleRegisterAdmin = () => {
        if (emailError || passError || confirmPassError || !email || !password || !confirmPassword) {
            alert('Please fix the errors before submitting.');
            return;
        }
        // Save user data and navigate to HomePageScreen with the data
        const newUser = { email, password };
        navigation.navigate('HomePageScreen', { registeredUser: newUser });
    };

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={RegisterPageStyle.Container}
            blurRadius={20}
        >
            <View style={RegisterPageStyle.Container}>
                <Image
                    style={RegisterPageStyle.Logo}
                    source={require('../assets/logo.webp')}
                />

                {/* Email Input */}
                <TextInput
                    style={[RegisterPageStyle.InputEmail, emailError ? RegisterPageStyle.ErrorHandler : null]}
                    placeholder="Email"
                    value={email}
                    onChangeText={validEmail}
                    keyboardType="email-address"
                />
                {emailError ? <Text style={RegisterPageStyle.ErrorHandler}>{emailError}</Text> : null}

                {/* Password Input */}
                <TextInput
                    style={[RegisterPageStyle.InputPassword, passError ? RegisterPageStyle.ErrorHandler : null]}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={validPassword}
                />
                {passError ? <Text style={RegisterPageStyle.ErrorHandler}>{passError}</Text> : null}

                {/* Confirm Password Input */}
                <TextInput
                    style={[RegisterPageStyle.InputPassword, confirmPassError ? RegisterPageStyle.ErrorHandler : null]}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={validConfirmPass}
                />
                {confirmPassError ? <Text style={RegisterPageStyle.ErrorHandler}>{confirmPassError}</Text> : null}

                {/* Register Admin Button */}
                <TouchableOpacity
                    style={RegisterPageStyle.RegisterButton}
                    onPress={handleRegisterAdmin}
                >
                    <Text style={RegisterPageStyle.RegisterText}>Register Admin</Text>
                </TouchableOpacity>

                {/* Back Button */}
                <TouchableOpacity
                    style={RegisterPageStyle.BackButton}
                    onPress={() => navigation.navigate('HomePageScreen')}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default RegisterAdminScreen;
