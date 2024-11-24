import {Text,View,} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../models/generics';
type LoginScreenProps = NativeStackScreenProps<RootStackParamsList,"Login">
const LoginScreen = (props:LoginScreenProps) => {
    return (
    <View>
        <Text>This is {props.route.name}'</Text>

    </View>
  )};
export default LoginScreen