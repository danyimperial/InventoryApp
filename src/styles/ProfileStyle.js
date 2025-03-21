import { StyleSheet } from 'react-native';

export const ProfileStyle = StyleSheet.create({
  Container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
},
 
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ProfileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  ProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
