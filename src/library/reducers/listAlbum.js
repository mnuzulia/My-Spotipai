import { GET_LISTALBUM } from "../actions/listAlbum";

export function listAlbum(
  state = {
    data: []
  },
  action
) {
  console.log("GET_ALBUMLIST", action);
  switch (action.type) {
    case GET_LISTALBUM:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
