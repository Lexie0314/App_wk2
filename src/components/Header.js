import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#A68F97",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    elevation:2,
  },
  textStyle: {
    fontSize: 24,
    color:"#1F2024",
    fontWeight:"bold",
  },
})

export default Header;