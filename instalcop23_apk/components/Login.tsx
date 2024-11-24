import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../models/generics';
type LoginScreenProps = NativeStackScreenProps<RootStackParamsList,"Login">

const icon = require('../assets/logo_min.jpg')

export default function Login(props:LoginScreenProps) {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={icon} style={styles.image}/>
        
        <Pressable style={styles.button} onPress={()=>{props.navigation.push("Report")}}>
          <Text style={styles.text}>Log In</Text>
        </Pressable>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBlock:10
  },
  image: {
    width:200,
    height:200,
    resizeMode:'stretch',
  },
  text:{
    marginBlock:0,
    color:'white',
    textAlign:'center'
  },
  button:{
    width:100,
    height:50,
    paddingBlock:3,
    paddingInline:5,
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#333333',
    borderRadius:'10%'
  }
});
