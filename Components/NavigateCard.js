import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";

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
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
