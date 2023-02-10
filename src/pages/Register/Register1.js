import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Logo } from "../../assets";
import { Inputan, Jarak, Tombol } from "../../components";
import { colors, responsiveHeight, responsiveWidth } from "../../utils";
import { registerUser } from "../../actions/AuthAction";
import { connect } from "react-redux";

class Register1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: '',
    };
  }

  onContinue = () => {
    const { nama, email, nohp, password } = this.state
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
      };
      // ke Auth
      this.props.dispatch(registerUser(data, password));
      this.props.navigation.navigate('Login')
      Alert.alert("Success", "Pendaftaran Berhasil")
      console.log("Data : ", data);
    } else {
      Alert.alert(
        "Error",
        "Nama, Email, No Handphone, dan Password harus di isi"
      )
    }
  }

  render() {
    const { nama, email, nohp, password } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.page}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <Tombol
                icon="Back"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            <View style={styles.ilustrasi}>
              <Logo />
              <Jarak height={10} />
              <Text style={styles.title}>Register</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circlePrimary}></View>
                <Jarak width={10} />
                <View style={styles.circleDisable} />
              </View>
            </View>
            <View style={styles.card}>
              <Inputan
                label="Nama"
                value={nama}
                onChangeText={(nama) => this.setState({ nama })}
              />
              <Inputan
                label="Email"
                value={email}
                onChangeText={(email) => this.setState({ email })}
              />
              <Inputan
                label="No.Handphone"
                keyboardType="number-pad"
                value={nohp}
                onChangeText={(nohp) => this.setState({ nohp })}
              />
              <Inputan
                label="Password"
                secureTextEntry
                value={password}
                onChangeText={(password) => this.setState({ password })}
              />
              <Jarak height={25} />
              <Tombol
                title="Register"
                type="text"
                padding={12}
                fontSize={18}
                onPress={() => this.onContinue()}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
})

export default connect(mapStateToProps, null)(Register1);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    alignItems: "center",
    marginTop: responsiveHeight(100),
  },
  title: {
    fontSize: 24,
    fontFamily: "light",
    color: colors.secondary,
  },
  wrapperCircle: {
    flexDirection: "row",
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10,
  },
  circleDisable: {
    backgroundColor: colors.secondary,
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10,
  },
  card: {
    marginHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingTop: 10,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },

  btnBack: {
    marginLeft: 30,
    marginTop: responsiveHeight(40),
    position: "absolute",
  },
});
