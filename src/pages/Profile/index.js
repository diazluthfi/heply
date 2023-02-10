import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'
import { colors, getData, heightMobileUI, responsiveHeight,responsiveWidth } from '../../utils'
import { dummyProfile,dummyMenu } from '../../data'
import { RFValue } from "react-native-responsive-fontsize";
import { ListMenu } from '../../components/besar';
import { FotoDefault } from '../../assets';


export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       profile: false,
       menus : dummyMenu
    }
  }
  
  componentDidMount(){
    this.getUserData();
  }


  getUserData = () => {
    getData('user').then(res => {
        const data = res
        console.log(data)
        if (data) {
            this.setState({
                profile: data
            })
        } else {
            this.props.navigation.replace('Login')
        }
    })

  }

  render() {
      const { profile, menus } = this.state

    return (
      <View style={styles.page}>
        <View style={styles.container }>
        <Image source={profile.avatar ? { uri: profile.avatar } : FotoDefault} style={styles.foto} />
        <View style={styles.profile}>
          <Text style={styles.nama}>{profile.nama}</Text>
          <Text style={styles.desc}>No. HP : {profile.nohp}</Text>
          
        </View>
        <ListMenu menus={menus} navigation={this.props.navigation}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(690), 
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  foto:{
    width: responsiveWidth(210),
    height: responsiveWidth(150),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: responsiveWidth(-75)
  },
  profile:{
    marginTop: 10,
    alignItems: 'center'
  },
  nama:{
    fontFamily: "bold",
    fontSize: RFValue(24,heightMobileUI)
  },

  desc:{
    fontFamily: "regular",
    fontSize: RFValue(18,heightMobileUI)
  }

})
