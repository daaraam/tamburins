import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth, googleLogin, signInWithEmailAndPassword } from '../API/firebase';
import Button from '../Components/Button';
import { useAuthContext } from '../Context/AuthContext';

export default function Login() {
	const {
		email,
		setEmail,
		password,
		setPassword,
		setEmailMsg,
		setIsEmail,
		emailMsg,
		setErrorMessage,
		errorMessage,
		setUser,
	} = useAuthContext();

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

	const emailLogin = async () => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			setUser(userCredential.user);
		} catch (error) {
			let errorMessage = '로그인에 실패 하였습니다.';
			switch (error.code) {
				case 'auth/user-not-found':
				case 'auth/wrong-password':
					setErrorMessage('이메일 혹은 비밀번호가 일치하지 않습니다.');
					break;
				default:
					errorMessage = '알 수 없는 오류가 발생하였습니다.';
			}

			return errorMessage;
		}
	};

	const SubmitLoginHandler = e => {
		e.preventDefault();
		const { email, password } = e.target;
		emailLogin(email, password);
	};

	return (
		<Page>
			<form onSubmit={SubmitLoginHandler}>
				<Title>Login</Title>

				<InputDiv>
					<label className="text-xs">이메일</label>
					<Input type="text" value={email} onChange={onChangeEmail} />
					{emailMsg}
				</InputDiv>

				<InputDiv>
					<label className="text-xs">비밀번호</label>
					<Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
				</InputDiv>

				<Button className="bg-black text-white my-3" onClick={SubmitLoginHandler} text={'확인'} />
				{errorMessage}
				<p className="flex justify-center p-5">OR</p>
				<Link to="/signup">
					<Button className="bg-white" text={'신규 회원가입'} />
				</Link>
				<Button className="bg-white my-3" onClick={googleLogin} text={'구글 로그인'} />
			</form>
		</Page>
	);
}
export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 2.25rem;
	margin-top: 2.5rem;
	margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
	font-size: 4rem;
	padding-bottom: 4rem;
	font-weight: 900;
	color: var(--color-black);
	font-family: serif;
`;

export const InputDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.75rem;
	margin-bottom: 0.75rem;
`;

export const Input = styled.input`
	border: 1px solid black;
	width: 30rem;
	padding: 0.5rem;
`;
