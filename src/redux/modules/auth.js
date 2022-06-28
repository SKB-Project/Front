import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from '../../lib/api/auth';
import { Map } from 'immutable';

const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // input 값 변경
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // form 초기화

const LOCAL_REGISTER = 'auth/LOCAL_REGISTER';

const SET_ERROR = 'auth/SET_ERROR';

export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);

export const changeInput = createAction(CHANGE_INPUT); //  { form, name, value }
export const initializeForm = createAction(INITIALIZE_FORM); // form 

export const setError = createAction(SET_ERROR);

const initialState = Map({
    register: Map({
        form: Map({
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }),
        error: null
    }),
    login: Map({
        form: Map({
            email: '',
            password: ''
        }),
        error: null
    })
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        const initialForm = initialState.get(action.payload);
        return state.set(action.payload, initialForm);
    },
    [SET_ERROR]: (state, action) => {
        const { form, message } = action.payload;
        return state.setIn([form, 'error'], message);
    },
    ...pender({
        type: LOCAL_REGISTER,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
}, initialState);