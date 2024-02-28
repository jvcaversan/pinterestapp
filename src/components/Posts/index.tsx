import { View } from "react-native";

import Post from "@/components/Post";
import { PostsProps } from "./posts";
import { ScrollView } from "react-native-gesture-handler";

const Posts = ({ posts }: PostsProps) => {
  const postsByColumn = (column: "right" | "left") => {
    const rest = column === "left" ? 0 : 1;

    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>{postsByColumn("left")}</View>
    </ScrollView>
  );
};

export default Posts;
