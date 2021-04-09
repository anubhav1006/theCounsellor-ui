import { combineReducers } from 'redux';

import { chatListReducer } from './chat/chat-screen/reducer';


export const rootReducer = combineReducers({
  chatList: chatListReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
