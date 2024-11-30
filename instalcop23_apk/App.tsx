import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ReportScreen from './screens/ReportScreen';
import { RootStackParamsList } from './models/generics';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator<RootStackParamsList>();


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <NavigationContainer>
      
      <Stack.Navigator  >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor:'#9fc6e8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: '#9fc6e8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
         <Stack.Screen 
          name="Report" 
          component={ReportScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#9fc6e8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
      

    </NavigationContainer>
  </QueryClientProvider>
  );
}
