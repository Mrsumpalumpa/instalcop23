import {Text} from 'react-native';
import { ProfileScreenProps } from '../models/generics';
const ProfileScreen = (props:ProfileScreenProps) => {
    return (
        <Text>{JSON.stringify(props)}</Text>


  )};
export default ProfileScreen