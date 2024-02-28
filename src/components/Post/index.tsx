import { useEffect, useState } from "react";

import { View, Text, Image } from "react-native";

import { PostProps } from "./post";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";

type Props = {
  post: PostProps;
};

const Post = ({ post }: Props) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio }]}
      />

      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white} />
      </View>
    </View>
  );
};

export default Post;
