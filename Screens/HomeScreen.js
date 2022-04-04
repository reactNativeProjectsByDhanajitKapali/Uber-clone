import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../Components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ padding: 10 }}>
      <View style={{}}>
        <Image
          style={{
            marginLeft: 5,
            width: 120,
            height: 120,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions></NavOptions>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
