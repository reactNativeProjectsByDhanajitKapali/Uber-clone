import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
import NavFovourites from "./NavFovourites";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ margin: 10, paddingTop: 5 }}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionsCard");
          }}
          onFail={(error) => console.error(error)}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavFovourites />
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "auto",
          borderColor: "gray",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "black",
            width: 100,
            height: 40,
            borderRadius: 20,
            padding: 10,
          }}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={{ textAlign: "center", color: "white" }}> Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "black",
            width: 100,
            height: 40,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="white"
            size={16}
          />
          <Text style={{ textAlign: "center", color: "white" }}> Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
