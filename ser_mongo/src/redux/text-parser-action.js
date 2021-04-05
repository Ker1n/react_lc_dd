import { TEXT_PARSER } from "./types";
import nlp from "compromise";

const wordsCollection = (words) => {
  return {
    type: TEXT_PARSER,
    payload: words,
  };
};

export default function exactWordsCollection() {
  return (dispatch, getState) => {
    const text = getState().addTextReducer;
    const doc = nlp(text);
    dispatch(wordsCollection(doc.json(0).terms));
  };
}
