import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import StoreInfo from './src/screens/StoreInfo';
import SaveInfo from './src/screens/SaveInfo';
import Thankyou from './src/screens/Thankyou';
import LoginVisitor from './src/screens/LoginVisitor';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="StoreInfo" component={StoreInfo} />
        <Stack.Screen name="SaveInfo" component={SaveInfo} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
        <Stack.Screen name="LoginVisitor" component={LoginVisitor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
