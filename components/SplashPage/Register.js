import React, { useEffect, useState } from 'react';
import Button from '../../styles/components/Button';
import Dialog from '@material-ui/core/Dialog';

const Register = () => {
	const [ modalShowing, setModalShowing ] = useState(false);
	return (
		<Button round onClick={() => setModalShowing(true)}>
			Sign Up
		</Button>
	);
};

export default Register;
