import React, { useEffect, useState } from 'react';
import Button from '../../styles/components/Button';
import Modal from '../Styles/Modal';
import Card from '../../styles/components/Card/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import CardStyles from '../../styles/components/modal';
import CardHeader from '../../styles/components/Card/CardHeader';
import DialogTitle from '@material-ui/core/DialogTitle';

const Login = ({ classes }) => {
	const [ modalShowing, setModalShowing ] = useState(false);
	return (
		<div>
			<Button round onClick={() => setModalShowing(true)}>
				Log In
			</Button>
			<Modal open={modalShowing}>
				<Card plain className={classes.modalLoginCard}>
					<DialogTitle
						id='login-modal-slide-title'
						disableTypography
						className={classes.modalHeader}
					>
						<CardHeader
							plain
							color='primary'
							className={`${classes.textCenter} ${classes.cardLoginHeader}`}
						>
							<h5 className={classes.cardTitleWhite}>Log in</h5>
						</CardHeader>
					</DialogTitle>
				</Card>
			</Modal>
		</div>
	);
};

export default withStyles(CardStyles)(Login);
