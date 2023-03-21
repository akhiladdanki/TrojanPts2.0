
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/HomePage';
import Feed from './components/Feed';
import ProfilePage from './components/ProfilePage';
import Setup from './components/Setup';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Instructions from './components/Instructions';
import Shop from './components/Shop';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignUp';
import CustomDrawer from './components/CustomDrawer';
import { AuthProvider } from './context/AuthContext';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     
      <Drawer.Navigator  drawerContent={(props)=><CustomDrawer {...props} />} >
      <Drawer.Screen name="Login Page" component={LoginPage} options={{headerShown:false, drawerItemStyle: {height: 0}}}/>
        <Drawer.Screen name="Trojan Points Feed" component={Feed} />
        <Drawer.Screen name="Register" component={SignUp} />
        
        <Drawer.Screen name="Contact Us" component={Setup}/>
        <Drawer.Screen name="Instructions" component={Instructions}/>
        <Drawer.Screen name="Shop" component={Shop}/>
        <Drawer.Screen name="Award Trojan Points" component={HomePage} options={{
           drawerItemStyle: { height: 0 }
  }}/>
        <Drawer.Screen name="My Profile" component={ProfilePage} options={{
           drawerItemStyle: { height: 0 }
  }}/>
      </Drawer.Navigator>
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  SideBarImage: {
    width: 60, height: 60, borderRadius: 30, backgroundColor: "#FFCC00"
  },
  mainSideBar: {display: "flex",flexDirection: "row", justifyContent: "space-between", padding: 20}
 });
