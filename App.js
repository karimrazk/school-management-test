import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";

import login from "./src/login";
 

import adminScreen from './src/screens/admin/adminScreen';
import studentScreen from './src/screens/admin/studentScreen';
import classesScreen from './src/screens/admin/classesScreen';
import addAdmin from './src/screens/admin/addAdmin';
import profil from "./src/screens/admin/profil";
import updateProfil from "./src/screens/admin/updateProfil";
import addClass from "./src/screens/admin/addClass";
 

const AddAdminNavigate = createStackNavigator(
{
  addAdmin: {
    screen: addAdmin, 

    navigationOptions :
    {
      headerTitle : "",
    }

  },
  Administrateurs: {
    screen: adminScreen, 
    navigationOptions :
    {
      headerShown : false,
    }
  }
},
{ 
  initialRouteName : "Administrateurs",
}
);

const AddclassNavigate = createStackNavigator(
  {
    addClass: {

      screen: addClass,  
      navigationOptions :
      {
        headerTitle : "",
      }
  
    },
    Classes: {
      screen: classesScreen, 
      navigationOptions :
      {
        headerShown : false,
      }
    }
  },
  { 
    initialRouteName : "Classes",
  }
  );
  
const udPadteProfilNavigate = createStackNavigator(
  { 
    updateProfil: {
      screen: updateProfil,  
      navigationOptions :
      {
        headerTitle : "",
      }
  
    },
    profil: {
      screen: profil, 
      navigationOptions :
      {
        headerShown : false,
      }
    }
  },
  { 
    initialRouteName : "profil",
  }
  );

const AdminNavBar = createBottomTabNavigator(
  {
    Administrateurs: {
      screen: AddAdminNavigate,
    },
    Classes: {
      screen: AddclassNavigate,
    },
    Profile: {
      screen: udPadteProfilNavigate,
    }, 
  },
  {
    initialRouteName: "Administrateurs", 
    tabBarOptions: {
      activeBackgroundColor: "#0275d8",
      activeTintColor: "#fff",
      labelStyle: {
        fontSize: 14,
        paddingBottom: 12,
      }
    }
  }
);
const AppNavigator = createSwitchNavigator(
  {
    login: login,
    adminScreen: AdminNavBar, 
  },
  {
    initialRouteName: "adminScreen", 
  }
);

export default createAppContainer(AppNavigator);
 