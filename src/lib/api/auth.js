import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/user/check/email/' + email);
export const checkUsernameExists = (username) => axios.get('/user/check/userName/' + username);

export const localRegister = ( {
    name, email, userName, password
}) => axios.post(process.env.REACT_APP_DB_HOST + '/user/signUp', 
{name, email, userName, password},
{ withCredentials: true},
);
export const localLogin = ({email, password}) => axios.post('/user/singIn', { email, password });

export const checkStatus = () => axios.get('/user/check');
export const logout = (email) => axios.delete('/quit/' + email);

// http://localhost:8080