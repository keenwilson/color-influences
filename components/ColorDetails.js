import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "color";

export default function ColorDetails({ route }) {
  const { color: name } = route.params;
  const color = Color(name);
  const textColor = {
    fontSize: 30,
    color: color.negate().toString(),
  };
  return (
    <View style={[styles.container, { backgroundColor: name }]}>
      <Text style={textColor}>{name}</Text>
      <Text style={textColor}>{color.rgb().toString()}</Text>
      <Text style={textColor}>{color.hsl().toString()}</Text>
      <Text style={textColor}>{color.luminosity()}</Text>
      <Text>
        *CMYK values are approximate and were established under specific
        criteria. To be used as a starting point only. When reproducing these
        colors in CMYK, please have the printer adjust them visually on the
        specific substrate and within your printing parameters so that the best
        possible simulation to the color is achieved.
        <br /> Please note: The color may appear different under various light
        sources due to metamerism. This metamerism is to be expected between
        multiple substrates due to varying methods of product manufacturing.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
