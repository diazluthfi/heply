 
import { UPDATE_PROFILE } from "../../actions/ProfileAction";

const initialState = {
  updateProfilLoading: false,
  updateProfilResult: false,
  updateProfilError: false,

};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,   
        updateProfilLoading: action.payload.loading,
        updateProfilResult: action.payload.data,
        updateProfilError: action.payload.errorMessage,
      };


    default:
      return state;
  }
}
