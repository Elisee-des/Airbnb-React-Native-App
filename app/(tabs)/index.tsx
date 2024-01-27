import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";

const Page = () => {
  const [category, setCategory] = useState("Timy homes");
  const items = useMemo(() => listingsData as any, []);
  const onDataChanged = (category: string) => {
    // console.log("CHANGE CATEGORIE", category);
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 180 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      {/* <Listings listings={items} category={category} /> */}

      <ListingsMap listings={listingsDataGeo} />
    </View>
  );
};

export default Page;
