import React, { useEffect, useState } from 'react';
import Button from '../Styles/Button';
import Modal from '../Styles/Modal';

const Login = () => {
	const [ modalShowing, setModalShowing ] = useState(false);
	return (
		<div>
			<Button round onClick={() => setModalShowing(true)}>
				Log In
			</Button>
			<Modal open={modalShowing}>Hello</Modal>
		</div>
	);
};

export default Login;
