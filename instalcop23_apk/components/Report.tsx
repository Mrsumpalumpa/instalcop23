import { useMemo } from 'react';
import { StyleSheet, Text, View,Pressable,FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../models/generics';
import { useReportContext } from '../providers/ReportProvider';
type ReportScreenProps = NativeStackScreenProps<RootStackParamsList,"Report">
const Report = (props:ReportScreenProps) => {
    const {report} = useReportContext()
    const list:any[] = useMemo(()=>{
      let out = []
      if(report.data && report.isSuccess) out = report.data.data
      return out
    },[report.isLoading,report.isFetching])
    return (
      <>
       {report.isLoading||report.isFetching?<Text>Loading</Text>:null}
       {report.data && report.data.data && report.isSuccess?(
        <FlatList 
          data={list} 
          renderItem={({item}:any)=>(<Text>{item.title}</Text>)}/>
       ):null}

      </>
  )};
export default Report

const styles = StyleSheet.create({
  
  button:{
    width:100,
    height:50,
    paddingBlock:3,
    paddingInline:5,
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#333333',
    borderRadius:'10%',
    position:'relative',

  },
  text:{
    marginBlock:0,
    color:'white',
    textAlign:'center'
  },
});
