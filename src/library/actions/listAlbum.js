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
    axios.get("http://18.223.162.119:3000/album").then(({ data }) => {
      console.log("res", data);
      dispatch(listAlbumOnReq(data));
    });
  };
}
