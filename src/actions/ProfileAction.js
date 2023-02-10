import FIREBASE from '../config/FIREBASE'
import { storeData } from '../utils';

export const   UPDATE_PROFILE = "UPDATE_PROFILE";


export const updateProfile = (data) =>{
    return(dispatch) => {
        //LOADING
    dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      })

      const dataBaru = {
        uid: data.uid,
        nama: data.nama,
        nohp: data.nohp
      }

      FIREBASE.database()
            .ref('users/'+dataBaru.uid)
            .update(dataBaru)
            .then((response) => {
                //SUKSESS
        dispatch({
            type: UPDATE_PROFILE,
            payload: {
              loading: false,
              data: response ? response : [],
              errorMessage: false,
            },
          });
  
          ///LOCAL STORAGE
          storeData('user', dataBaru);
            })
            .catch((error) => {
                //ERRROR
                dispatch({
                  type: UPDATE_PROFILE,
                  payload: { 
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                  },
                });
        
                alert(error.message);
              });
    }
}