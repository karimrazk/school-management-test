 import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import login from './src/login';
import admin from './src/Screens/Admin/AdminScreen';
import addAdmin from './src/Screens/Admin/AddAdmin';
import classes from './src/Screens/Admin/ClassesScreen';


const AdminNavBar = createBottomTabNavigator(
{ 
  administrator: admin ,
  classes: classes, 
  Student: classes,  
},
{
  initialRouteName: 'administrator',

});
const AppNavigator = createStackNavigator(
  {
    login : login,
    Admin : AdminNavBar,
  },
  {
      initialRouteName: 'login',
      headerMode : "none"
  }
);



export default createAppContainer(AppNavigator );  
 
