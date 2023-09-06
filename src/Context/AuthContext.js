import { createContext, useContext, useEffect, useState } from 'react';
import { googleLogin, logOut, userStateChange } from '../API/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState();
	const [email, setEmail] = useState('');
	const [emailMsg, setEmailMsg] = useState('');
	const [isEmail, setIsEmail] = useState(false);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [check, setCheck] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		userStateChange(user => {
			setUser(user);
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				googleLogin,
				logOut,
				email,
				setEmail,
				emailMsg,
				setEmailMsg,
				isEmail,
				setIsEmail,
				password,
				setPassword,
				name,
				setName,
				check,
				setCheck,
				errorMessage,
				setErrorMessage,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	return useContext(AuthContext);
}
