
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/login';
import Admin from './src/Screens/Admin/AdminScreen';
import AjouterAdmin from './src/Screens/Admin/AjouterAdmin';
import Classes from './src/Screens/Admin/ClassesScreen';

const AppNavigator_Ajouter = createStackNavigator({
  Admin: {
    screen: Admin
  },
  AjouterAdmin: {
    screen: AjouterAdmin
  }
  
},{ 
  headerMode: 'none',
}
);
const AppNavigator_Admin = createStackNavigator({
  Login: {
    screen: Login
  }, 
  Admin: {
    screen: Admin
  }
  },{ 
  headerMode: 'none',
}
);

export default createAppContainer(AppNavigator_Admin,AppNavigator_Ajouter);  
 

