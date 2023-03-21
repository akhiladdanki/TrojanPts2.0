import React from 'react'
import { NavigationContainer,createDrawerNavigator } from '@react-navigation/native';
// import { } from '@react-navigation/drawer';

import SignUp from '../screens/SignUp';
import LoginPage from '../screens/LoginPage';
import Feed from './Feed';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import Setup from './Setup';
import Instructions from './Instructions';
import Shop from './Shop';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const SideBarNavigation = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator  drawerContent={(props)=><CustomDrawer {...props} />} >
    <Drawer.Screen name="Login Page" component={LoginPage} options={{headerShown:false}}/>
      <Drawer.Screen name="Trojan Points Feed" component={Feed} />
      <Drawer.Screen name="Register" component={SignUp} />
      <Drawer.Screen name="Award Trojan Points" component={HomePage} options={{
        // drawerItemStyle: { height: 0 }
}}/>
      <Drawer.Screen name="My Profile" component={ProfilePage}/>
      <Drawer.Screen name="Contact Us" component={Setup}/>
      <Drawer.Screen name="Instructions" component={Instructions}/>
      <Drawer.Screen name="Shop" component={Shop}/>
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default SideBarNavigation

