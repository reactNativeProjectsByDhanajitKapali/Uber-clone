import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../Components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";
import NavFovourites from "../Components/NavFovourites";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ padding: 10 }}>
      <View style={{}}>
        <Image
          style={{
            marginLeft: 10,
            width: 125,
            height: 125,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
              marginLeft: 10,
              marginRight: 10,
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
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          onFail={(error) => console.error(error)}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />

        <NavOptions></NavOptions>
        <NavFovourites></NavFovourites>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
