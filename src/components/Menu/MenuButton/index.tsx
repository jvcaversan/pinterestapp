import { View, Text, Pressable } from "react-native";
import React from "react";
import { MenuButtonProps } from "./menuButton";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";

const MenuButton = ({ title, icon }: MenuButtonProps) => {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default MenuButton;
