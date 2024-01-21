import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

import Store from './Redux/Store'; //khong co ngoac nhon
import SignIn from './Screen/SignIn'; //app lỗi thì sửa thành './Screen/SignIn'
import LogIn from './Screen/LogIn';
import Home from './Screen/Home';
import Phone from './Screen/Phone';
import Detail from './Screen/Detail';
import Feed from './Screen/Feed';
import OTP from './Screen/Otp';

import { Provider } from 'react-redux';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function App() {
  function TabNavigate() {
    return (
      <Tab.Navigator
        activeColor="#408BF8"
        barStyle={{ backgroundColor: 'white', borderTopWidth:1, borderColor:'gray'}}
      >
        <Tab.Screen name="MessageTab" 
        component={Home}
        options={{
            tabBarLabel: 'Tin nhắn',
            tabBarIcon: ({ color }) => (
          <Feather name="message-circle" size={30} color={color} />            
          ),
          }}
        />
        <Tab.Screen name="PhoneTab" 
        component={Phone}
          options={{
            tabBarLabel: 'Danh bạ',
            tabBarIcon: ({ color }) => (
          <FontAwesome5 name="address-book" size={30} color={color} /> 
            ),
          }}
        />
        <Tab.Screen name="Feed" 
        component={Feed}
          options={{
            tabBarLabel: 'Nhật ký',
            tabBarIcon: ({ color }) => (
          <AntDesign name="clockcircle" size={30} color={color} />  
            ),
          }}
        />
        <Tab.Screen name="Cá nhân" 
        component={Detail}
          options={{
            tabBarIcon: ({ color }) => (
        <FontAwesome name="user" size={30} color={color} />            
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
        {/* <Stack.Screen name="Otp" component={OTP} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Home" component={TabNavigate} options={{ headerShown: false }} /> */}
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={TabNavigate} options={{ headerShown: false }} />
          {/* Các màn hình khác nếu cần */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
