import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Map from "../Components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../Components/NavigateCard";
import RideOptionsCard from "../Components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={{ height: "50%" }}>
        <Map />
      </View>
      <View style={{ height: "50%" }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
