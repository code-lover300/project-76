import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import SpaceCraftsScreen from './Screens/SpaceCrafts';
import DailyPicScreen from './Screens/DailyPic';
import StarMapScreen from './Screens/StarMap';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" ScreenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCrafts" component ={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component ={DailyPicScreen} />
        <Stack.Screen name="StarMap" component ={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
