import React from 'react';
import {
    Text,
    ImageBackground,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";
import { DashBoardStyle } from '../styles/DashBoardStyle';

const DashBoardItems = [
    { id: '1', category: 'Tests', amount: '5/35', icon: require('../assets/tests.png') },
    { id: '2', category: 'Users', amount: '2/25', icon: require('../assets/users.png') },
    { id: '3', category: 'Patient', amount: '3', icon: require('../assets/logo.webp') },
    { id: '4', category: 'Visit', amount: '9', icon: require('../assets/logo.webp') },
    { id: '5', category: 'Report', amount: '7', icon: require('../assets/logo.webp') },
];

const DashBoard = ({ navigation }) => {
    // Navigation
    const handleSettings = () => {
        navigation.navigate('ProfileScreen');
    };
    return (
        <View style={DashBoardStyle.Container}>
            <ImageBackground
                source={require('../assets/lab.jpg')}
                style={DashBoardStyle.Container}
            >
                {/* Profile Card */}
                <View style={DashBoardStyle.ProfileCard}>
                    <Image
                        source={require('../assets/profile_pic.jpg')}
                        style={DashBoardStyle.ProfileIcon}
                    />
                    <Text style={DashBoardStyle.UserName}>User / Admin </Text>
                    <TouchableOpacity
                        style={DashBoardStyle.SettingsButton}
                        onPress={handleSettings}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Profile Settings</Text>
                    </TouchableOpacity>
                </View>

                {/* Dashboard */}
                <Text style={DashBoardStyle.DashboardTitle}>Dashboard</Text>

                {/* Dashboard Items */}
                <FlatList
                    data={DashBoardItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={DashBoardStyle.CardContainer}>
                            <View style={DashBoardStyle.DashBoardItem}>
                                <Image source={item.icon} style={DashBoardStyle.Icon} />
                                <Text style={DashBoardStyle.Category}>{item.category}</Text>
                                <Text style={DashBoardStyle.Amount}>{item.amount}</Text>
                            </View>
                        </View>
                    )}
                />
            </ImageBackground>
        </View>
    );
};

export default DashBoard;
