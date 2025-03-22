import { Settings, StyleSheet } from "react-native";

export const DashBoardStyle = StyleSheet.create({
    Container: {
        flex: 1,
    },
    ProfileCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    ProfileIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    UserName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    SettingsButton: {
        backgroundColor: 'black',
        width: '50%',
        padding: 10,
        margin: 5,
        alignItems: 'center'
    },
    DashboardTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center'
    },
    CardContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    DashBoardItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Icon: {
        width: 36,
        height: 36,
        marginRight: 10,
    },
    Category: {
        flex: 1,
        fontSize: 20,
    },
    Amount: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
