import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="screenA"
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
        component={ScreenA}
      />
      <Screen name="screenB" options={{
        drawerLabel: 'Profile',
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="account-circle" color={color} size={size} />
        ),
      }} component={ScreenB} />
    </Navigator>
  );
}
