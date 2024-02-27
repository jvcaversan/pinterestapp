import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/theme";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
