import { AnyAction } from "redux";

import { AuthStateType, User } from "../../types";

import { USER_AUTH_ACTIONS } from "./actions";

export const initialState: AuthStateType = {
  user: <User>{},
  processing: false,
  success: false,
  error:{}
}

export const authReducer = (
  state: AuthStateType = initialState,
  action: AnyAction
):AuthStateType => {
  switch (action.type){
      case USER_AUTH_ACTIONS.CREATE_USER_LOAD :
        return {...state,  processing: true, success:false}
      case USER_AUTH_ACTIONS.CREATE_USER_FAIL :
        return {...state, error: action.payload, processing: false, success:false}
      case USER_AUTH_ACTIONS.CREATE_USER_SUCCESS :
        return {...state, user: action.payload, processing: false, success:true}
      case USER_AUTH_ACTIONS.GET_USER_LOAD :
        return {...state, processing: true, success:false}
      case USER_AUTH_ACTIONS.GET_USER_FAIL :
        return {...state, error: action.payload, processing: false, success:false}
      case USER_AUTH_ACTIONS.GET_USER_SUCCESS :
        return {...state, user: action.payload, processing: false, success:true}
      default:
          return state;
  }
}