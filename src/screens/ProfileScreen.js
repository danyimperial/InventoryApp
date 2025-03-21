import React, { useEffect, useState } from 'react';
import {
  Alert,
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { CommonActions } from '@react-navigation/native';
import { ProfileStyle } from '../styles/ProfileStyle';

const ProfileScreen = ({ route, navigation }) => {
  // const { userData } = route.params;  

  const logOut = () => {
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
              routes: [{ name: 'WelcomeScreen' }],
            })
          ),
      },
    ]);
    return true;
  };


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
      <TouchableOpacity
        style={ProfileStyle.BackButton}
        onPress={logOut}
      >
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ProfileScreen;
