import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Map from "../Components/Map";

const MapScreen = () => {
  return (
    <View>
      <View style={{ height: "80%" }}>
        <Map />
      </View>
      <View style={{ height: "50%" }}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
