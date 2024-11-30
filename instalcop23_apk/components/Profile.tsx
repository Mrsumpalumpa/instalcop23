import { View,Text,Pressable,StyleSheet } from 'react-native';
import { ProfileScreenProps } from '../models/generics';
import { logout } from '../requests/api';
import { useAuthContext } from '../providers/AuthProvider';
const Profile = (props:ProfileScreenProps) => {
    const { logoutUser,setAuth } = useAuthContext()
    return (
      <View style={styles.container}>
        <Pressable 
          style={styles.button} 
          onPress={()=>{props.navigation.push('Report')}}
        >
            {<Text style={styles.text}>Go to reports</Text>}
        </Pressable>
        <Pressable 
          style={styles.button} 
          onPress={()=>{
            setAuth(null)
            logoutUser.refetch()
        }}
        >
            {<Text style={styles.text}>Logout</Text>}
        </Pressable>
      </View>

  )};
export default Profile

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    columnGap:3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 500,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    rowGap: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#9fc6e8',
    borderRadius: 5,
  },
  input: {
    height: 40,
    width: 230,
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
