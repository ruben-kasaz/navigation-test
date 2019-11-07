import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// import { ScrollView } from "react-navigation";

const data = new Array(60).fill(0);

const HomeView = () => {
  return (
    <View>
      <ScrollView>
        {data.map((elem, index) => {
          return (
            <View key={index} style={styles.item}>
              <Text>Home - {index}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 30,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
  }
});

export default HomeView;
