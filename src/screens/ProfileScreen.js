import React, { useEffect, useState } from 'react';
import {
  Alert,
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { CommonActions } from '@react-navigation/native';
import { ProfileStyle } from '../styles/ProfileStyle';
const ProfileScreen = ({ navigation }) => {
  const backAction = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'HomePageScreen' }],
            }),
          ),
      },
    ]);
    return true;
  };

  
  const user = [
    {
        email: 'user@email.com',
        password: 'password123',
        role: 'user'
    }
];

  return (

    <ImageBackground
      source={require('../assets/background.jpeg')}
      style={ProfileStyle.Container}
      blurRadius={20}
    >
      <View style={ProfileStyle.header}>
        <Text style={ProfileStyle.headerTitle}>User Profile</Text>
      </View>
      <View style={ProfileStyle.ProfileContainer}>
        <Image
          source={require('../assets/profile_pic.jpg')}
          style={ProfileStyle.ProfileImage}
        />
      </View>
      <View style={ProfileStyle.ProfileContainer}>
      <Text>
          {user.email}
          {user.role}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
