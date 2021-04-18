import { KeyboardType } from "react-native";

export interface ChatMessageInterface {
  id: string,
  fromUid: string,
  toUid: string,
  message: string
}

export interface ChatMessagesInterface {
  chats : ChatMessageInterface[]
}

export interface StateType {
  uid: string,
  chats: ChatMessagesInterface[]
}

export interface AuthStateType {
  user?: User,
  processing: boolean,
  success: boolean,
  error: any
}

export interface GetUserRequest {
  username?: string,
  password?: string,
  uid?: string,
  authToken?:string
}

export interface User {
  uid: string,
  name: string,
  contact: number,
  email: string,
  dob: string
}

export type MainTabNavigatorParamsList = {
  Home: undefined
  Profile: undefined
  Chat: undefined
}

export interface InputOptionsType {
  isPassword?: boolean | undefined;
  type: string,
  keyboardType?: KeyboardType,
  placeholder: string,
  value: string,
  onChangeText: ((text: string) => void) | undefined,
  onPress: Function,
  active: boolean,
  icon: Element
}

export interface InputOptionsTypeList {
  options : InputOptionsType[];
}
