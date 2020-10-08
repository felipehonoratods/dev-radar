import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Image } from 'react-native';
import React from 'react';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        headerTitle: () => 
        <View>
            <Image
                source={require('../assets/title.png')}
                style={{width:110, height:27.5}}
            />
        </View>,
        headerTitleAlign: "center"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil',
        headerTitleAlign: "center"
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#7D40E7',
      },
    },
  },
  ),
);

export default Routes;