import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  IconHome,
  IconHomeAktif,
  IconMap,
  IconMapAktif,
  IconProfile,
  IconProfileAktif,
} from "../../../assets";

import { colors, fonts } from "../../../utils";

const TabItem = ({ isFocused, onLongPress, onPress, label }) => {

    const Icon = () => {
        if(label=="Home"){
            return isFocused ? <IconHomeAktif/> : <IconHome/>
        }
        if(label=="Maps"){
            return isFocused ? <IconMapAktif/> : <IconMap/>
        }
        if(label=="Profile"){
            return isFocused ? <IconProfileAktif/> : <IconProfile/>
        }
        return<IconHome/>
    }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon/>
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      
    },

    text: (isFocused) => ({
        color: isFocused ? colors.secondary : colors.blue,
        fontSize: 11,
        marginTop: 4,
        fontFamily: "bold"
    })

});
