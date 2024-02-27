import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "@/theme";
import MenuButton from "./MenuButton";

const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={28}
            onPress={onClose}
            color={theme.colors.white}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  );
});

export default Menu;
