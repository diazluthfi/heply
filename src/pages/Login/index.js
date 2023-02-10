import { StyleSheet, View, Text, Alert } from "react-native";
import React, { Component } from "react";
import { Ilustrasi, Logo } from "../../assets";
import { colors, responsiveHeight } from "./../../utils";
import { Inputan, Jarak, Tombol } from "../../components";
import { loginUser } from "../../actions/AuthAction";
import { connect } from "react-redux";

class Login extends Component {
  constructor(proops) {
    super(proops);

    this.state = {
      email: "",
      password: "",
    };
  }

  login = () => {
    const { email, password } = this.state;

    if (email && password) {
      //action
      this.props.dispatch(loginUser(email, password));
    } else {
      Alert.alert("Error", "Email & Password harus di isi");
    }
  };

  componentDidUpdate(prevProps) {
    const { loginResult } = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace("MainApp");
    }
  }

  render() {
    const { email, password } = this.state;
    const { loginLoading } = this.props;

    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
        </View>

        <View style={styles.cardLogin}>
          <Inputan
            label="Email"
            value={email}
            onChangeText={(email) => this.setState({ email })}
          />
          <Inputan
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(password) => this.setState({ password })}
          />
          <Jarak height={25} />
          <Tombol
            title="Login"
            type="text"
            padding={12}
            fontSize={18}
            loading={loginLoading}
            onPress={() => this.login()}
          />
        </View>

        <View style={styles.register}>
          <Text style={styles.textBlue}>Belum Punya Akun?</Text>
          <Text
            style={styles.textBlack}
            onPress={() => this.props.navigation.navigate("Register1")}
          >
            Klik Untuk Daftar
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateProps = (state) => ({
  loginLoading: state.AuthReducer.loginloading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});

export default connect(mapStateProps, null)(Login);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },

  logo: {
    alignItems: "center",
    marginTop: responsiveHeight(200),
  },
  cardLogin: {
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
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  textBlue: {
    fontFamily: "bold",
    fontSize: 18,
    color: colors.primary,
  },
  textBlack: {
    fontFamily: "bold",
    fontSize: 18,
    color: 'black',
  },
  register: {
    alignItems: "center",
    marginTop: 10,
  },
});
