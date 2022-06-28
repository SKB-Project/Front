import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/user/email/' + email);
export const checkUsernameExists = (username) => axios.get('/user/username/' + username);

export const localRegister = ({username, email}) => axios.post('/user/singUp', { username, email });
export const localLogin = ({email, password}) => axios.post('/user/singIn', { email, password });

export const checkStatus = () => axios.get('/user/check');
export const logout = (email) => axios.delete('/quit/' + email);