import { TEXT_PARSER } from "./types";

export const textParserReducer = (state = ['123'], action) => {

  switch (action.type) {
    case TEXT_PARSER:

      return  action.payload;

    default:
    return state;
  }
  
};
