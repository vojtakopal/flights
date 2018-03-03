import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form'
import { fetchFlights } from '../actions';
import { getRecentlySearchedFlights, isLoading, getError } from '../selectors';
import SearchComponent from '../components/SearchComponent';

export default connect(
    createStructuredSelector({
        results: getRecentlySearchedFlights,
        isLoading,
        error: getError,
    }),
    { search: fetchFlights },
)(SearchComponent);
