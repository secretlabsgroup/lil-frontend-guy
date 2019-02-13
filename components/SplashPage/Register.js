import React, { useEffect, useState, Fragment } from 'react';
import Button from '../../styles/components/Button';
import Assignment from '@material-ui/icons/Assignment';
import Card from '../../styles/components/Card/Card';
import DialogTitle from '@material-ui/core/DialogTitle';
import Close from '@material-ui/icons/Close';
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
				<Card plain className={classes.modalSignupCard}>
					<DialogTitle
						id='signup-modal-slide-title'
						disableTypography
						className={classes.modalHeader}
					>
						<Button
							simple
							className={classes.modalCloseButton}
							key='close'
							aria-label='Close'
							onClick={() => setModalShowing(false)}
						>
							{' '}
							<Close className={classes.modalClose} />
						</Button>
						<h3 className={`${classes.cardTitle} ${classes.modalTitle}`}>Register</h3>
					</DialogTitle>
				</Card>
			</Dialog>
		</Fragment>
	);
};

export default withStyles(ModalStyles)(Register);
