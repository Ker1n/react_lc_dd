import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addTextReducer } from "./redux/add-text-reducer";
import { textParserReducer } from "./redux/text-parser-reducer";
import { getToWordsReducer} from './redux/get-to-words-reducer';

const reducer = combineReducers({
  addTextReducer,
  textParserReducer,
  getToWordsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
