import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { IconAntrian, IconBack, IconSubmit } from "../../../assets";
import { colors } from "../../../utils";
import TextOnly from './TextOnly'


const Tombol = (props) => {
  const Icon = () => {
    if (icon === "Antrian") {
      return <IconAntrian />;
    }
    else if(icon ==="Back"){
      return <IconBack/>
    }
    else if(icon ==="Submit")
    return <IconSubmit />;
  };

  
  const { icon, totalantrian, padding, type} = props;
  if (type === "text") {
    return <TextOnly {...props} />;
  }

  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Icon />
      {totalantrian && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>
            {totalantrian}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: (padding) => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
  }),
  notif: {
    position: "absolute",
    right: 5,
    backgroundColor: "red",
    borderRadius: 3,
    padding: 3,
  },
  textNotif: {
    fontSize: 8,
    color: colors.white,
  },
});
