import axios from "axios";

export const GET_LISTALBUM = "GET_LISTALBUM";

export function listAlbumOnReq(data) {
  return {
    type: GET_LISTALBUM,
    data
  };
}

export function getListAlbum(data) {
  return dispatch => {
    console.log("asasasa");
    axios.get("http://192.168.43.12:3000/album").then(({ data }) => {
      console.log("res", data);
      dispatch(listAlbumOnReq(data));
    });
  };
}
