import { combineReducers } from "redux";
import { auth, logOut } from "./auth";
import { listAlbum } from "../../library/reducers/listAlbum";

export default combineReducers({
  auth,
  logOut,
  listAlbum
});
