import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Store from './Redux/Store'; //khong co ngoac nhon
import SignIn from './Screen/SignIn'; //app lỗi thì sửa thành './Screen/SignIn'

import { Provider } from 'react-redux';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function App() {
  function TabNavigate() {
    return (
      <Tab.Navigator
        activeColor="#2451da"
      >
        <Tab.Screen name="AccountTab" component={Account}
          options={{
            tabBarLabel: 'Tài khoản',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-outline" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="HomeTab" component={Home}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Điện ảnh" component={News}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="film" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          {/* <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
          <Stack.Screen name="Account" component={TabNavigate} options={{ headerShown: false }} /> */}
          {/* Các màn hình khác nếu cần */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
