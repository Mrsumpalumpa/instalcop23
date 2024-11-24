import {Text,View,} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../models/generics';
type ProfileScreenProps = NativeStackScreenProps<RootStackParamsList,"Profile">
const ProfileScreen = (props:ProfileScreenProps) => {
    return (
    <View>
        <Text>This is {props.route.name}'</Text>

    </View>
  )};
export default ProfileScreen