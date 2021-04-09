export type User = {
  name: string;
  surname: string;
  age: number;
}

export type UserListState = User[];

export type SendChatMessageAction = {
    uid: string;
    message: string;
}

export type GetChatMessagesAction = {
  uid: string;
  message: string;
}

export type AddUserAction = {
  name: string;
  surname: string;
  age: number;
}

export type ChatListMessagesAction = SendChatMessageAction | GetChatMessagesAction;

export type AppState = {
  userList: UserListState,
  // add future state slices here
}
