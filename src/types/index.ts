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
