import { join } from 'ramda';

export default function createPrefixer(...prefixes) {
    return str => join('/', [...prefixes, str]);
}
