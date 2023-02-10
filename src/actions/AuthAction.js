import FIREBASE from "../config/FIREBASE";
import { storeData } from "../utils";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

export const registerUser = (data, password) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then((success) => {
        // Signed in
        const dataBaru = {
          ...data,
          uid: success.user.uid,
        };

        //Simpan ke Realtime
        FIREBASE.database()
          .ref("users/" + success.user.uid)
          .set(dataBaru);

        //SUKSESS
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: dataBaru,
            errorMessage: false,
          },
        });

        ///LOCAL STORAGE
        storeData('user', dataBaru);
      })
      .catch((error) => {
        //ERRROR
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });

        alert(error.message);
      });
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    //LOADING
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    FIREBASE.auth()
      .signInWithEmailAndPassword(email, password)
      .then((success) => {
        // Signed in
        FIREBASE.database()
          .ref("/users/" + success.user.uid)
          .once("value")
          .then((resDB) => {
            if(resDB.val()){
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: resDB.val(),
                  errorMessage: false,
                },
              });
              ///LOCAL STORAGE
              storeData('user', resDB.val());
            }else{
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: false,
                  errorMessage: "Data User Tidak Ada",
                },
              });

            }
            
          });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
