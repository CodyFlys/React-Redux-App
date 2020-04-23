import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import {fetchQuote} from '../store/actions/quoteActions';
//
const RandomQuote = props => {

    useEffect(() => {
        // call a action creator
        props.fetchQuote()
    },[])

    // if fetching is TRUE from the actions.
    // if (props.isFetching) {
    //     return <Loader />
    // }

    return (
        <div>
        <h1>Daily Quote</h1>
        {props.isFetching && (<Loader 
                 type="Puff"
                 color="#00BFFF"
                 height={100}
                 width={100}
        />)}
    {props.quote && <h3>"{props.quote}"</h3>}
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state);
    return {
        quote: state.quotes.quote,
        isFetching: state.quotes.isFetching,
        error: state.quotes.error
    }
}

export default connect(mapStateToProps, {fetchQuote})(RandomQuote)