import sha1 from 'sha1';

export default obj => sha1(JSON.stringify(obj));
