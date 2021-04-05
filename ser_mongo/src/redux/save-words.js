import {SAVE_WORDS} from "./types";
import axios from 'axios'



const save = (words) => { 
    
    return { 
        type : SAVE_WORDS,
        payload: words                               //localStorage.setItem('key', JSON.stringify(words))
    }

}
export default function saveWords(url) { 
        return (dispatch, getState) => { 
        const text = getState().textParserReducer;
        axios.post(url, text).then(({data}) => dispatch(save(data)))
    }
}

// export default function saveWords() { 
    
//     return (dispatch, getState) => { 
//         const words = getState().textParserReducer
//         dispatch(save(words));
//     }
// } 