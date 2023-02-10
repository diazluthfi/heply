import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  getData,
  colors,
  responsiveHeight,
  responsiveWidth,
} from "../../utils";
import { FotoDefault } from "../../assets";
import { Inputan, Pilihan, Tombol } from "../../components";
import { launchImageLibrary} from 'react-native-image-picker';
import { updateProfile } from "../../actions/ProfileAction";
import { connect } from "react-redux";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: "",
      nama: "",
      email: "",
      nohp: "",
      avatar: false,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps){
    const { updateProfilResult }= this.props

    if(updateProfilResult && prevProps.updateProfilResult!== updateProfilResult){
        this.props.navigation.replace("MainApp")
    }
  }

  getImage = () => {
        launchImageLibrary({quality: 1, maxWidth: 500, maxHeight: 500}, (response) => {
            if(response.didCancel || response.errorCode || response.errorMessage){
                Alert.alert("Erorr","Maaf Sepertinya anda tidak memilih")
            }else{
                const source =response.uri; 
                
            }
            console.log(source)
        }
        );
  }

  getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      console.log(data);
      this.setState({
        uid: data.uid,
        nama: data.nama,
        email: data.email,
        nohp: data.nohp,
        avatar: data.avatar,
      });
    });
  };

  onSubmit = () => {
    const {
        nama,
        email,
        nohp
    } = this.state;
    if(nama && nohp){
        //UPDATE
        this.props.dispatch(updateProfile(this.state))
    }
    else{
        Alert.alert("Error"," Nama dan Nomor HP harus diisi")
    }
  }

  render() {
    const { uid, nama, email, nohp, avatar } = this.state;
    const { updateProfilLoading}= this.props;

    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan
            label="Nama"
            value={nama}
            onChangeText={(nama) => this.setState({ nama })}
          />
          <Inputan label="Email" value={email} disabled />
          <Inputan
            label="No. Handphone"
            value={nohp}
            onChangeText={(nohp) => this.setState({ nohp })}
            keyboardType="number-pad"
          />
          <View style={styles.inputFoto}>
            <Text style={styles.label}>Foto Profile :</Text>
            <View style={styles.wrapperUpload}>
              <Image
                source={avatar ? avatar : FotoDefault}
                style={styles.foto}
              />
              {/* <View style={styles.tombolChangePhoto}>
                <Tombol loading={updateProfilLoading} title="Change Photo" type="text" padding={7} onPress={() => this.getImage()} />
              </View> */}
            </View>
          </View>
          <View style={styles.submit}>
            <Tombol
              title="Submit"
              type="text"
              icon="Submit"
              padding={responsiveHeight(15)}
              fontSize={18}
              onPress={() => this.onSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    updateProfilLoading: state.ProfileReducer.updateProfilLoading,
    updateProfilResult: state.ProfileReducer.updateProfilResult,
    updateProfilError: state.ProfileReducer.updateProfilError,
  
});

export default connect(mapStateToProps, null)(EditProfile);


const styles = StyleSheet.create({
  pages: {
      backgroundColor: colors.white,
      flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
  },
  foto: {
    width: responsiveWidth(250),
    height: responsiveWidth(250),
    borderRadius: 60,
  },
  wrapperUpload: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
