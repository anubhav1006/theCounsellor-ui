import { AnyAction } from "redux";

import { StateType } from "../../../types";

import { CHAT_SCREEN_ACTION_TYPES } from "./actions";

export const initialState: StateType = {
  uid: '',
  chats: []
}

export const chatListReducer = (
  state: StateType = initialState,
  action: AnyAction
) => {
  switch (action.type){
      case CHAT_SCREEN_ACTION_TYPES.GET_CHATS :
      return state;
      case CHAT_SCREEN_ACTION_TYPES.SEND_CHATS :
         return state;
      default:
          return state;
  }
}