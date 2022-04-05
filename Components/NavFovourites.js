import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    icon: "home",
    name: "Home",
    location: "Code Street, Londong, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    name: "Work",
    location: "London Eye, London, UK",
  },
];

const NavFovourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ backgroundColor: "gray", height: 0.5 }} />
      )}
      renderItem={({ item: { icon, name, location } }) => (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Icon
            style={{
              margin: 10,
              borderRadius: 25,
              backgroundColor: "#DFDFDE",
              padding: 10,
            }}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>{name}</Text>
            <Text style={{ color: "gray" }}>{location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFovourites;

const styles = StyleSheet.create({});
