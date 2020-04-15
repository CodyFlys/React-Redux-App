// thunks stuff
import axios from 'axios'

// perform a async operation but redux is synchronus.
export const fetchQuote = () => {
    return dispatch  => {
        dispatch({ type: "FETCH_QUOTE_START" })
        axios.get('https://api.adviceslip.com/advice')
        .then(res => {
            dispatch({type: 'FETCH_QUOTE_SUCCESS', payload: res.data.slip.advice})
        })
        .catch(err => console.log(err.response));
    }
}