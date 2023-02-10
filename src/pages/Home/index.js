import React, { Component } from "react";
import {  StyleSheet, View, Text, ScrollView } from "react-native";
import { Banner,ListRumahSakit, HeaderComponent, Jarak} from "../../components";
import {  dummyRumahSakit } from "../../data";
import { colors } from "../../utils";

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      rumahsakits: dummyRumahSakit,
    }
  }
  
  render() {
    const { rumahsakits , navigation} =this.state
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent />
        <Banner/>
        <View style={styles.pilihrumahsakit}>
              <Text style={styles.label}>Pilih  <Text style={styles.boldLabel}>Rumah Sakit</Text> yang anda piliih</Text>
              <ListRumahSakit rumahsakits={rumahsakits} navigation={navigation}/>


            </View>

        <Jarak height={100}/>
        </ScrollView>
        


      </View>
    );
  }
}

const styles = StyleSheet.create({
  pilihrumahsakit: {
      marginHorizontal: 30,
      marginVertical: 10,
  },
  page: {
    flex: 1, 
    backgroundColor: colors.white,
  },
  label:{
    fontSize: 15,
    fontFamily:"regular"
  },
  boldLabel:{
    fontSize: 16,
    fontFamily : "bold"
  }
});
