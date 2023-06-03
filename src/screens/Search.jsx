import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { SearchBar } from "react-native-elements";
import colors from "../util/colors";

export default function SearchScreen(props) {
  const [text, onChangeText] = React.useState("");

  const searchSubmit = () => {
    props.navigation.navigate("ChooseRestaurant", { search: text });
  };
  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={onChangeText}
        round
        iconColor={colors.default}
        onSubmitEditing={searchSubmit}
        leftIconContainerStyle={{ color: colors.default, fontSize: 100 }}
        inputContainerStyle={{ backgroundColor: colors.white }}
        containerStyle={{
          backgroundColor: colors.default,
          width: "80%",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
        }}
        inputStyle={{ backgroundColor: colors.white }}
        placeholder="Search for your preferred restaurant"
        value={text}
      />
      <View style={styles.desc}>
        <Text style={styles.middleText}>or</Text>
        <Image
          source={require("../../assets/qr-code.png")}
          style={styles.img}
        />
        <Text style={styles.bottomText}>Scan, Pay & Enjoy!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 20,
    marginTop: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.default,
    height: "100%",
    paddingTop: 100,
  },
  desc: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 100,
    marginTop: 60,
    width: 100,
  },
  middleText: {
    alignItems: "center",
    color: "#171717",
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 60,
    paddingTop: 10,
  },
});
