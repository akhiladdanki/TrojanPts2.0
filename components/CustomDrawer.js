import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
    <View style = {styles.mainSideBar}>
      <View>
        <Text>
          Akhil 
        </Text>
        <Text>
          Akhil@gmail.com
        </Text>
      </View>
      <TouchableOpacity onPress={() => {
            navigation.navigate("My Profile");
          }}>
      <Image source = {require("../assets/MyLinkedInPic.jpeg")} resizeMode = "contain" style = {styles.SideBarImage}/>
      </TouchableOpacity>
      </View>
    <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  SideBarImage: {
      width: 60, height: 60, borderRadius: 30, backgroundColor: "#FFCC00"
    },
    mainSideBar: {display: "flex",flexDirection: "row", justifyContent: "space-between", padding: 20}
})