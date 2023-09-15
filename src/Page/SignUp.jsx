import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../API/firebase';

import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import { useAuthContext } from '../Context/AuthContext';
import { Input, InputDiv, Page, Title } from './Login';
export default function SignUp() {
	const navigate = useNavigate();
	const {
		email,
		setEmail,
		password,
		setPassword,
		name,
		setName,
		check,
		setCheck,
		setErrorMessage,
		errorMessage,
		setEmailMsg,
		setIsEmail,
		emailMsg,
	} = useAuthContext();

	const [passwordMsg, setPasswordMsg] = useState('');
	const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
	console.log(isPasswordConfirm);

	const onChangeEmail = e => {
		setEmail(e.target.value);
		const emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (!emailRegex.test(email)) {
			setEmailMsg('이메일 형식으로 입력하세요.');
			setIsEmail(false);
		} else {
			setEmailMsg('');
			setIsEmail(true);
		}
	};

	const onChangePassword = e => {
		const passwordConfirmCurrent = e.target.value;
		setCheck(passwordConfirmCurrent);

		if (password === passwordConfirmCurrent) {
			setPasswordMsg('');
			setIsPasswordConfirm(true);
		} else {
			setPasswordMsg('비밀번호가 일치하지 않습니다.');
			setIsPasswordConfirm(false);
		}
	};

	const emailSignUp = async () => {
		try {
			const createdUser = await createUserWithEmailAndPassword(auth, email, password, name, check);
			setEmail('');
			setPassword('');
			setName('');
			setCheck('');
			console.log(createdUser);
			navigate('/');
			alert('회원가입에 성공하였습니다.');
		} catch (error) {
			let errorMessage = '로그인에 실패 하였습니다.';
			switch (error.code) {
				case 'auth/user-not-found':
				case 'auth/wrong-password':
					setErrorMessage('이메일 혹은 비밀번호가 일치하지 않습니다.');
					break;
				case 'auth/email-already-in-use':
					setErrorMessage('이미 사용중인 이메일입니다.');
					break;
				case 'auth/weak-password':
					setErrorMessage('비밀번호는 6글자 이상이어야 합니다.');
					break;
				case 'auth/network-request-failed':
					setErrorMessage('네트워크 연결에 실패하였습니다.');
					break;
				case 'auth/invalid-email':
					setErrorMessage('잘못된 이메일 형식입니다.');
					break;
				case 'auth/internal-error':
					setErrorMessage('잘못된 요청입니다.');
					break;
				default:
					errorMessage = '알 수 없는 오류가 발생하였습니다.';
			}
			return errorMessage;
		}
	};
	const SubmitHandler = e => {
		e.preventDefault();
		const { email, password } = e.target;
		emailSignUp(email, password);
	};

	return (
		<Page>
			<form onSubmit={SubmitHandler}>
				<Title>Signup</Title>
				<InputDiv>
					<label className="text-xs">이메일</label>
					<Input type="text" value={email} onChange={onChangeEmail} />
					{emailMsg}
				</InputDiv>

				<InputDiv>
					<label className="text-xs">비밀번호</label>
					<Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
				</InputDiv>

				<InputDiv>
					<label className="text-xs">비밀번호 확인</label>
					<Input type="password" value={check} onChange={onChangePassword} />
					{passwordMsg}
				</InputDiv>
			</form>
			{errorMessage}
			<Button text={'가입하기'} className="my-3 text-white bg-black" onClick={SubmitHandler} />
		</Page>
	);
}
