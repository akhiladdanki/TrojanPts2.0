import React from 'react';
import {SafeAreaView, View, Image, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },




  contactContainer:{
    backgroundColor: "#FFCC00",
    height: "100%",
    width: "100%"
  },
  header: {
   // backgroundColor: "#FFCC00",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  textHeader: {
    fontSize: 30,
    justifyContent:"center",
    marginLeft:90

  },
  description: {
    marginTop: 30,
    border: 2,
    padding: 25,
  },
  textDescription:{
    lineHeight: 30,
    fontSize: 16
  },
  iconPhone: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  iconPhoneAwesome: { fontSize: 24 },
  descriptionLower:{
    padding: 25
  },
  textDescriptionLower:{
    lineHeight: 30,
    fontSize: 16
  }
});

const DisplayAnImage = () => {
  return (<SafeAreaView>
    <View style={styles.container}>
      <Image
        style={{width:200, height:200,paddingLeft:100, marginLeft:86,borderRadius:100}}
        source={require('../assets/MyLinkedInPic.jpeg')}
        />

       </View>

       <View style={styles.container}>
       <Text style={styles.textHeader}>Akhil Addanki</Text>

       </View>


   
       </SafeAreaView>
  );
};
export default DisplayAnImage;

const Setup = () => {
  return (
   
      <View styles = {styles.contactContainer}>

      
      <View style={styles.header}>
        <Text style={styles.textHeader}>Contact Us</Text>
      </View>
      <View style={styles.iconPhone}>
        <FontAwesome name="phone" style={styles.iconPhoneAwesome} />
      </View>

      <View style={styles.description}>
        <Text style={styles.textDescription}>
          If you have any questions or concerns, please contact the help desk.
        </Text>

      </View>
      <View style={styles.descriptionLower}>
        <Text style={styles.textDescriptionLower}>
          Help Desk Number: 323-442-8440
          helpdesk@med.usc.edu
        </Text>

      </View>
      </View>
    

  );
}
//export default Setup;


  
