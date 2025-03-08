import React from 'react';
import {
    Text,
    View,
    Image,
} from "react-native";
import { HomePageStyle } from "C:/Users/cl7-34/Documents/GitHub/LetranProject/src/styles/HomePageStyle";
const HomePageScreen = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={HomePageStyle.Logo}
                source={require('C:/Users/cl7-34/Documents/GitHub/LetranProject/src/assets/logo.webp')} />
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomePageScreen;