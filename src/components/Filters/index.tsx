import { FlatList } from "react-native";
import React from "react";

import Filter from "@/components/Filter";
import { styles } from "./style";
import { FilterProps } from "./filters";

const Filters = ({ filters, filter, onChange }: FilterProps) => {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
};

export default Filters;
