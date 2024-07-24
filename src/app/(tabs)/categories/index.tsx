import { StyleSheet, View } from "react-native";

import { Link } from "expo-router";
import TagsList from "@/components/TagsList";
import CategoriesList from "@components/CategoriesList";
import { useEffect, useState } from "react";
import { Product } from "@models/types";
import Screens from "@constants/Screens";

export default function CategoriesListScreen() {
  return (
    <View style={styles.container}>
      <TagsList />
      <CategoriesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
