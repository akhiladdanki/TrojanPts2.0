import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RotateInDownLeft } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
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
    fontSize: 30

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
  
})

const Setup = () => {
  return (
    <SafeAreaView >
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
    </SafeAreaView>

  );
}

export default Setup;
