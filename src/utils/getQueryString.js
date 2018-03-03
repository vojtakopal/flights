import { mapObjIndexed, compose, join, values } from 'ramda';

export default compose(
    join('&'),
    values,
    mapObjIndexed((value, key) => {
        console.log({ value, key });
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }),
);
