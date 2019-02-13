import React, { useEffect, useState, Fragment } from 'react';
import Button from '../../styles/components/Button';
import Dialog from '@material-ui/core/Dialog';
import ModalStyles from '../../styles/components/Modal/styles';
import withStyles from '@material-ui/core/styles/withStyles';

const Register = ({ classes }) => {
	const [ modalShowing, setModalShowing ] = useState(false);
	return (
		<Fragment>
			<Button round onClick={() => setModalShowing(true)}>
				Sign Up
			</Button>
			<Dialog
				classes={{
					root: classes.modalRoot,
					paper: classes.modal + ' ' + classes.modalSignup,
				}}
				open={modalShowing}
				// TransitionComponent={Transition}
				keepMounted
				onClose={() => setModalShowing(false)}
				aria-labelledby='signup-modal-slide-title'
				aria-describedby='signup-modal-slide-description'
			>
				hi
			</Dialog>
		</Fragment>
	);
};

export default withStyles(ModalStyles)(Register);
