import React, { Component } from 'react';
import { AuthContent, InputWithLabel,AuthButton,RightLink,AuthError } from '../../components/Auth';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import {isEmail, isLength, isAlphanumeric} from 'validator';
import { debounce } from 'lodash';
import axios from 'axios';
import Swal from 'sweetalert2';
class Register extends Component {
    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'register',
            message
        });
    }
    validate = {
        name: () => {
            return true;
        },
        email: (value) => {
            if(!isEmail(value)) {
                this.setError('잘못된 이메일 형식 입니다.');
                return false;
            }
            return true;
        },
        userName: (value) => {
            if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
                this.setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
                return false;
            }
            return true;
        },
        password: (value) => {
            if(!isLength(value, { min: 6 })) {
                this.setError('비밀번호를 6자 이상 입력하세요.');
                return false;
            }
            this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
            return true;
        },
        passwordConfirm: (value) => {
            if(this.props.form.get('password') !== value) {
                this.setError('비밀번호확인이 일치하지 않습니다.');
                return false;
            }
            this.setError(null); 
            return true;
        }
    }

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('register')
    }

    handleLocalRegister = async () => {
        //this.props.history.push('/auth/login');

        const { form, AuthActions, error, history } = this.props;
        const { name, email, userName, password, passwordConfirm } = form.toJS();

        const { validate } = this;

        if(error) return; // 현재 에러가 있는 상태라면 진행하지 않음
        if(!validate['email'](email) 
            || !validate['userName'](userName) 
            || !validate['password'](password) 
            || !validate['passwordConfirm'](passwordConfirm)) { 
            // 하나라도 실패하면 진행하지 않음
            return;
        }
        console.log({
            name, email, userName, password
        })
        try {
            await AuthActions.localRegister({
                name, email, userName, password
            });
            const loggedInfo = this.props.result.toJS(); // toJS
            console.log(loggedInfo);
            // TODO: 로그인 정보 저장 (로컬스토리지/스토어)
            Swal.fire(
                '회원가입 성공!',
                '가입한 아이디로 로그인해주세요!',
                'success'
              )
            history.push('/auth/login'); // 회원가입 성공시 login 페이지로 이동
        } catch(e) {
            console.log(e);
            // 에러 처리하기
            if(e.response.status === 409) {
                const { key } = e.response.data;
                const message = key === 'email' ? '이미 존재하는 이메일입니다.' : '이미 존재하는 아이디입니다.';
                return this.setError(message);
            }
            this.setError('알 수 없는 에러가 발생했습니다.')
        }
    }
    checkEmailExists = debounce(async (email) => {
        try {
            const response = await axios.get('/user/check/email/' + email);
            console.log(response.data);
            if(response.data.result === 'FAIL') {
                this.setError('이미 존재하는 이메일입니다.');
            } else {
                this.setError(null);
            }
        } catch (e) {
            console.log(e);
        }
    },300) // 함수 호출 시 300ms이후 실행

    checkUsernameExists = debounce(async (userName) => {
        try {
            const response = await axios.get('/user/check/userName/' + userName);
            console.log(response.data);
            if(response.data.result === 'FAIL') {
                this.setError('이미 존재하는 아이디입니다.');
            } else {
                this.setError(null);
            }
        } catch (e) {
            console.log(e);
        }
    },300)
    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'register'
        });
        console.log("present status: ",name);

        const validation = this.validate[name](value);
        if(name.indexOf('password') > -1 || !validation) return;

        const check = name === 'email' ? this.checkEmailExists : this.checkUsernameExists; // name 에 따라 이메일체크할지 아이디 체크 할지 결정
        check(value);
    }

    render() {
        const { error } = this.props;
        const { name, email, userName, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange, handleLocalRegister } = this;

        return (
            <AuthContent title="회원가입">
                <InputWithLabel 
                    label="이름" 
                    name="name"
                    placeholder="이름" 
                    value={name} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="이메일"
                    name="email"
                    placeholder="이메일" 
                    value={email} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="아이디" 
                    name="userName" 
                    placeholder="아이디" 
                    value={userName} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="비밀번호" 
                    name="password" 
                    placeholder="비밀번호"
                    type="password" 
                    value={password} 
                    onChange={handleChange}
                />
                <InputWithLabel 
                    label="비밀번호 확인" 
                    name="passwordConfirm" 
                    placeholder="비밀번호 확인" 
                    type="password" 
                    value={passwordConfirm}
                    onChange={handleChange}
                />
                {
                    error && <AuthError>{error}</AuthError>
                }
                <AuthButton onClick={handleLocalRegister}>회원가입</AuthButton>
                <RightLink to="/auth/login">로그인</RightLink>
            </AuthContent>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form']),
        error: state.auth.getIn(['register', 'error']),
        exists: state.auth.getIn(['register', 'exists']),
        result: state.auth.get('result'),
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Register);