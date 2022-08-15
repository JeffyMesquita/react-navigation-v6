import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
        tabBarInactiveTintColor: '#000000',
        
      }}
    >
      <Screen
        name="screenA"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
        component={ScreenA}
      />
      <Screen
        name="screenB"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
        component={ScreenB}
      />
    </Navigator>
  );
}
