import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import userData from "../data/userData.json";
import Checkbox from "expo-checkbox";
import { AirbnbRating, Button } from "@rneui/themed";
import { Avatar } from "@rneui/themed";
import { ref, set } from "firebase/database";
import { db } from "../firebase/index";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 1000,
  },
  container: {
    //height:undefined,

    flexGrow: 1,
  },
  header: {
    // backgroundColor: "#FFCC00",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  description: {
    marginTop: 10,
    border: 2,
    padding: 20,
  },
  textDescription: {
    textAlign: "center",
    lineHeight: 30,
    fontSize: 14,
  },
  iconPhone: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  textHeader: {
    fontSize: 30,
  },
  iconPhoneAwesome: {
    fontSize: 24,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 15,
    paddingVertical: 20,
    padding: 20,
  },
  inputTextContainer: {},
  mainCheckbox: {
    marginTop: 10,
    marginLeft: 15,
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  subCheckbox: {
    width: 30,
    height: 30,
  },
  textCheckbox: {
    fontSize: 20,
  },
  textCheckboxContainer: {
    marginLeft: 10,
    marginTop: 4,
  },
  ratingContainer: {
    //marginTop: 10
  },
});

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(userData);
  const [filterData, setFilterData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [isChecked, setIsChecked] = useState({
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
    isChecked4: false,
    isChecked5: false,
    isChecked6: false,
    isChecked7: false,
    isChecked8: false,
    isChecked9: false,
    isChecked10: false,
  });
  const handleSubmit = () => {
    if(!searchQuery){
        return;
    }
    if(!comments){
        return;
    }
    if(!rating){
        return;
    }
    set(ref(db, "userlist/" + searchQuery), {
      searchQuery: searchQuery,
      rating: rating,
      comments: comments,
    })
      .then(() => {
        alert("Data Created");
      })
      .catch((err) => {
        console.error("Something Went Wrong");
      });
    setSearchQuery([]);
    setRating(0);
  };
  useEffect(() => {
    if (searchQuery) {
      handleFilter();
    }
    return () => {
      //demounted when not required
    };
  }, []);
  const handleFilter = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const fetcher = await fetch(apiUrl);
    const jsondata = await fetcher.json();
    setFilterData(jsondata);
    setMainData(jsondata);
  };
  const changeText = (text, e) => {
    if (text) {
      const newData = mainData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearchQuery(text);
    } else {
      setFilterData(mainData);
      setSearchQuery(text);
    }
  };
  const handleSelection = (item) => {
    const newId = item.id;
    if (newId === item.id) {
      setSearchQuery(item.name);
    }
    setFilterData([]);
  };
  const Itemview = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "flex-start",
          marginLeft: 15,
          alignItems: "center",
        }}
        onPress={() => handleSelection(item)}
      >
        <View style={{ padding: 10 }}>
          <Avatar
            size={32}
            rounded
            title={item.name.slice(0, 1)}
            containerStyle={{ backgroundColor: "blue" }}
          />
        </View>
        <View>
          <Text>{item.name.toUpperCase()}</Text>
          <Text>{item.email.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Award Trojan Points</Text>
        </View>
        <View style={styles.iconPhone}>
          <FontAwesome name="thumbs-up" style={styles.iconPhoneAwesome} />
        </View>
        <View style={styles.description}>
          <Text style={styles.textDescription}>
            Reward a colleague for going above and beyond.
          </Text>
        </View>
        <TextInput
          style={{
            fontSize: 18,
            marginHorizontal: 12,
            borderWidth: 1,
            height: 40,
            paddingHorizontal: 12,
            borderRadius: 5,
          }}
          placeholder="Enter Peer's Med Email "
          value={searchQuery}
          underlineColorAndroid="transparent"
          onChangeText={(text) => changeText(text)}
        />
        {searchQuery.length > 0 ? (
          <FlatList
            data={filterData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={Itemview}
          />
        ) : null}

        <View style={styles.mainCheckbox}>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked1}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked1: !isChecked.isChecked1,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Authenticity</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked2}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked2: !isChecked.isChecked2,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Innovative</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked3}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked3: !isChecked.isChecked3,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Compassionate</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked4}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked4: !isChecked.isChecked4,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Professionalism</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked5}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked5: !isChecked.isChecked5,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Collegiality</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked6}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked6: !isChecked.isChecked6,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Efficiency</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked7}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked7: !isChecked.isChecked7,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Communication</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked8}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked8: !isChecked.isChecked8,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Leadership</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked9}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked9: !isChecked.isChecked9,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>Teamwork</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              value={isChecked.isChecked10}
              onValueChange={() =>
                setIsChecked({
                  ...isChecked,
                  isChecked10: !isChecked.isChecked10,
                })
              }
              style={styles.subCheckbox}
            />
            <View style={styles.textCheckboxContainer}>
              <Text style={styles.textCheckbox}>KNOWN Service Standards</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.textCheckbox}>Trojan Points to Award:</Text>
            </View>
            <AirbnbRating
              defaultRating={rating}
              count={5}
              size={50}
              reviews={[]}
              onFinishRating={(num) => setRating(num)}
            />
          </View>
          <View>
            <View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.textCheckbox}>Comments:</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginTop: 2,
                  width: "96%",
                  height: 100,
                  borderRadius: 15,
                }}
              >
                <TextInput
                  editable
                  multiline
                  maxLength={500}
                  numberOfLines={5}
                  value={comments}
                  onChangeText={(text) => setComments(text)}
                  style={{ padding: 10, top: 50, fontSize: 14, marginTop: -80 }}
                />
              </View>
            </View>
          </View>
          <View>
            <Button
              title="Submit Trojan Points"
              containerStyle={{
                width: 200,
                marginHorizontal: 80,
                marginVertical: 20,
                borderRadius: 10,
              }}
              onPress={handleSubmit}
              buttonStyle={{ backgroundColor: "#990000" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};
export default HomePage;
