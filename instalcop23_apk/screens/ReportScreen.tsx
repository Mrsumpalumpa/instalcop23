import {Text,View,} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../models/generics';
import Report from '../components/Report';
import ReportProvider from '../providers/ReportProvider';
type ReportScreenProps = NativeStackScreenProps<RootStackParamsList,"Report">
const ReportScreen = (props:ReportScreenProps) => {
    return (
      <ReportProvider>
        <Report props={props}/>
      </ReportProvider>
  )};
export default ReportScreen