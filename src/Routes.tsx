import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Sign from './Pages/Auth/Sign';

const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerBackTitle: 'Back', headerTitle: ''}}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{
            headerBackTitle: 'Back',
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
