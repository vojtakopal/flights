import React from 'react';
import { Field, reduxForm } from 'redux-form'
import pt from 'prop-types';

const SearchForm = (props) => {
    const { handleSubmit, handle } = props;
    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="flyFrom">From</label>
                <Field name="flyFrom" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <Field name="to" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <Field name="date" component="input" type="date" />
            </div>
            <button type="submit">Search</button>
        </form>
    );
}

SearchForm.propTypes = {
    handleSubmit: pt.func,
};

export default reduxForm({
    form: 'search',
})(SearchForm);
