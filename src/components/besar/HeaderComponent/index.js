import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { IconCari } from "../../../assets";
import { colors, responsiveHeight } from "../../../utils";
import {Jarak, Tombol} from "../../kecil"

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeaders}>
           {/* Input Pencarian*/}
          <View style={styles.searcSection}>
            <IconCari/>
            <TextInput
              placeholder="Cari Rumah Sakit . . ."
              style={styles.input}
            />
          </View>
            <Jarak width={10}/>
            <Tombol icon="Antrian" padding={10}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: responsiveHeight(160),
  },
  wrapperHeaders: {
    marginTop: 50,
    marginHorizontal: 30,
    padding: 10,
    flexDirection: 'row',
  },
  searcSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: "center"
  },
  input: {
    fontSize: 16,
  },
});
