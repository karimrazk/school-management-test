 import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import login from './src/login';

import administrator from './src/Screens/Admin/adminScreen';
import student from './src/Screens/Admin/studentScreen';
import addAdmin from './src/Screens/Admin/addAdmin';

import classes from './src/Screens/Admin/classesScreen';
 

const AdminNavBar = createBottomTabNavigator(
{ 
  administrator: { screen : administrator}, 
  classes: classes, 
  student: student,  

},
{ 
  initialRouteName: 'student',

});
const AppNavigator = createSwitchNavigator(
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
 
