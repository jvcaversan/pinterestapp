import { Image, ImageProps } from "react-native";
import React from "react";
import { styles } from "./styles";
import { AvatarProps } from "./avatar";

const Avatar = ({ selected, ...rest }: AvatarProps & ImageProps) => {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...rest} />
  );
};

export default Avatar;
