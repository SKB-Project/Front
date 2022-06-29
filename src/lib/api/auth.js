import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/user/check/' + email);
export const checkUsernameExists = (username) => axios.get('/user/check/' + username);

export const localRegister = ( {
    name, email, userid, password
}) => axios.post('http://localhost:8080//user/singUp', {name, email, userid, password});
export const localLogin = ({email, password}) => axios.post('/user/singIn', { email, password });

export const checkStatus = () => axios.get('/user/check');
export const logout = (email) => axios.delete('/quit/' + email);