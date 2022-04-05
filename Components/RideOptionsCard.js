import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [rideSelected, setRideSelected] = useState();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              alignSelf: "flex-start",
              margin: 10,
            }}
            onPress={() => navigation.navigate("NavigateCard")}
          >
            <Icon name="chevron-left" type="fontawesome"></Icon>
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              padding: 10,
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            Select a Ride - {travelTimeInformation?.distance?.text}
          </Text>
        </View>

        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                //alignContent: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
              onPress={() => setRideSelected(item)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
              <View style={{ justifyContent: "center", marginLeft: -100 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.title}
                </Text>
                <Text>
                  {travelTimeInformation?.duration?.text} to the destination
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  alignSelf: "center",
                }}
              >
                ₹
                {Math.round(
                  (travelTimeInformation?.duration?.value * item.multiplier) /
                    10
                )}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                //alignContent: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
              onPress={() => setRideSelected(item)}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={{ uri: image }}
              />
              <View style={{ justifyContent: "center", marginLeft: -100 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {title}
                </Text>
                <Text>Travel time...</Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  alignSelf: "center",
                }}
              >
                $99
              </Text>
            </TouchableOpacity>
          )}
        /> */}
        {rideSelected && (
          <View style={{ justifyContent: "center", marginBottom: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 5,
                margin: 10,
                height: 45,
              }}
            >
              <Text
                style={{
                  padding: 5,
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontWeight: "100",
                }}
              >
                Choose {rideSelected?.title}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
