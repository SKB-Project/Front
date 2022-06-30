import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/user/check/email' + email);
export const checkUsernameExists = (username) => axios.get('/user/check/userid' + username);

export const localRegister = ( {
    name, email, userName, password
}) => axios.post('http://23.23.240.178:8080/user/singUp', {name, email, userName, password});
export const localLogin = ({email, password}) => axios.post('/user/singIn', { email, password });

export const checkStatus = () => axios.get('/user/check');
export const logout = (email) => axios.delete('/quit/' + email);

// http://localhost:8080