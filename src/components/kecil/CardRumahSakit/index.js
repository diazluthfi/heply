import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";
import { responsiveWidth } from "../../../utils";
import Tombol from "../Tombol";

const CardRumahSakit = ({ navigation, rumahsakit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={rumahsakit.gambar[0]} style={styles.gambar} />
        <Text>{rumahsakit.nama}</Text>
      </TouchableOpacity>
      <Tombol type="text" title="Buat Janji" padding={7} onPress={() => navigation.navigate('BuatJanji', { rumahsakit })}/>
    </View>
  );
};

export default CardRumahSakit

const styles = StyleSheet.create({
  container:{
    marginBottom: 20,
    backgroundColor: 'yellow',
  },
  card: {
    backgroundColor: colors.red,
    padding: 10,
    width: responsiveWidth(170),
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  gambar: {
    width: 100,
    height: 100,
  },
});
