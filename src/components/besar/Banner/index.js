import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Slider1 } from "../../../assets";

import { responsiveWidth } from "../../../utils";



export default class Banner extends Component {
  // constructor(props) {
  // //   super(props);

  // //   this.state = {
  // //     images: [Slider1, Slider2],
  // //   }
  // // }
  
  render() {
    return (
      <View style={styles.container}>
        
        {/* <SliderBox images={this.state.images} autoplay
        circeLoop SliderBoxHeight={responsiveHeight(0)} /> */}
    
        <Slider1 style={styles.Banner}/>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
  alignItems:"center"
 

  },

});
