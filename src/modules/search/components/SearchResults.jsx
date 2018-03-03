import React from 'react';
import moment from 'moment';
import { map, mapObjIndexed, compose, drop, take, values, join, length } from 'ramda';

const renderTime = unixTimestamp => moment.unix(unixTimestamp).format('DD/MM/YYYY H:mm:ss');

const renderPrice = compose(
    join(' | '),
    values,
    mapObjIndexed((value, key) => `${value} ${key}`),
);

const renderResult = result => (
    <li key={result.id}>[{renderTime(result.dTime)}] {result.cityFrom} - {result.cityTo} for {renderPrice(result.conversion)}</li>
);

export default ({ results, page = 0, limit = 5, onShowMore }) => (
    <ul>
        {compose(
            map(renderResult),
            take(limit),
            drop(page * limit),
        )(results)}
        {(length(results) > ((page + 1) * limit)) && <ul><a href="#" onClick={onShowMore}>Show more</a></ul>}
    </ul>
);
