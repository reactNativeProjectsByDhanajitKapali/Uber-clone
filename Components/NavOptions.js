import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Oder Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            backgroundColor: "#DFDFDE",
            margin: 10,
            borderRadius: 5,
            padding: 15,
          }}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={styles.text}>{item.title}</Text>
            <Icon
              style={{
                backgroundColor: "black",
                padding: 5,
                marginTop: 5,
                borderRadius: 50,
              }}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: "normal",
  },
});

export default NavOptions;
