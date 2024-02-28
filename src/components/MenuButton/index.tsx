import { Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./style";
import { theme } from "@/theme";

import { MenuButtonProps } from "./menuButton";

const MenuButton = ({ title, icon }: MenuButtonProps) => {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icons}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default MenuButton;
