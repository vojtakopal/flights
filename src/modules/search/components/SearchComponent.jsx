import React from 'react';
import { Field, reduxForm } from 'redux-form'
import pt from 'prop-types';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { INITIAL_RESULTS_LIMIT } from '../constants';

const Loading = () => <h4>Loading...</h4>;
const Error = error => <h4 style="color: red">{JSON.stringify(error)}</h4>

class SearchComponent extends React.Component {
    static propTypes = {
        search: pt.func.isRequired,
        results: pt.arrayOf(pt.shape({})),
        isLoading: pt.bool,
        error: pt.shape({}),
        renderResult: pt.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            limit: INITIAL_RESULTS_LIMIT,
        };
    }

    handleSubmit = data => {
        const { search } = this.props;
        this.setState({ limit: INITIAL_RESULTS_LIMIT });
        search(data);
    };

    handleShowMore = () => {
        this.setState({
            limit: this.state.limit + INITIAL_RESULTS_LIMIT,
        })
    };

    render() {
        const { results, renderResult, isLoading, error } = this.props;
        return (
            <div>
                <SearchForm onSubmit={this.handleSubmit} />
                {isLoading && <Loading />}
                {error && !isLoading && <Error />}
                <SearchResults results={results} onShowMore={this.handleShowMore} limit={this.state.limit} />
            </div>
        );
    }
}

export default reduxForm({
    form: 'search',
})(SearchComponent);
