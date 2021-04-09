import { AppDispatch } from "../../app/App";
import { User } from "../../types";
import AuthServiceApi from "../../service/user/auth.service";

import {USER_AUTH_ACTIONS} from "./actions";

export const createUserAction = () => ({
  type: USER_AUTH_ACTIONS.CREATE_USER_LOAD,
});

export const userCreatedSuccessAction = (user: User) => ({
  type: USER_AUTH_ACTIONS.CREATE_USER_SUCCESS,
  payload: {
    user
  }
});

export const userCreatedFailedAction = (error: any) => ({
  type: USER_AUTH_ACTIONS.CREATE_USER_SUCCESS,
  payload: {
    error
  }
});


export function createUser(user: User) {
  return (dispatch: AppDispatch)  => { 
    dispatch(createUserAction());
    return AuthServiceApi.getInstance().createUser(user)
      .then(
        response => {
          dispatch(userCreatedSuccessAction(response.data));
        },
        error => {
          dispatch(userCreatedFailedAction(error));
        })
  }
}



// export const getUserAction = (getuserRequest: GetUserRequest) => ({
//   type: USER_AUTH_ACTIONS.GET_USER_LOAD,
//   payload: {
//   }
// });

// export function getUser(userRequest: GetUserRequest) {
//   return dispatch => {
//     dispatch();
//     return feedService.likePost({ postId, userId })
//       .then(
//         response => {
//           dispatch(likePostSuccess(response))
//         },
//         error => {
//           dispatch(failure('Server error.'))
//         })
//   }
// }