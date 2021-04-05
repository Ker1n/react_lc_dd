import { GET_TO_WORDS } from "./types";

const getToWords = (words) => {
  return {
    type: GET_TO_WORDS,
    payload: words,
  };
};

export default function getToWordsCollection() {
  return (dispatch) => {
    const words = JSON.parse(localStorage.getItem("key"));
    dispatch(getToWords(words));
  };
}
