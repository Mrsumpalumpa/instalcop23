import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
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
      
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
         <Stack.Screen 
          name="Report" 
          component={ReportScreen} 
        />
      </Stack.Navigator>
      

    </NavigationContainer>
  </QueryClientProvider>
  );
}
