import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './src/User/login';
import Register from './src/User/register';
import Profil from './src/User/profil';
import Home from './src/Media/home';
import RouterComponent from './src/router/RouterComponent';
import { store, persistor } from './src/store/configStore';
import { useSelector } from 'react-redux';
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  console.log(persistor);
  //const logged = useSelector((state) => state.userReducer.user.logged);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <RouterComponent/>
      </PersistGate>
    </Provider>
  );
}
