import axios from 'axios';
import moment from 'moment';
import getQueryString from '../utils/getQueryString';

const endpoints = {
    FLIGHTS: '/flights',
};

export default ({ baseUrl }) => {
    const apiRequest = url => axios.get(url);
    return {
        fetchFlights: ({ flyFrom, to, date }) => apiRequest(`${baseUrl}/${endpoints.FLIGHTS}?${getQueryString({ flyFrom, to, dateFrom: formatDate(date), dateTo: formatDate(date) })}`).then(({ data }) => data && data.data),
    }
};

const formatDate = date => moment(date).format('DD/MM/YYYY');
