import React, { useEffect, useState, Fragment } from 'react';
import Button from '../../styles/components/Button';
import Dialog from '@material-ui/core/Dialog';
import ModalStyles from '../../styles/components/Modal/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '../../styles/components/Card/Card';
import CardHeader from '../../styles/components/Card/CardHeader';
import DialogTitle from '@material-ui/core/DialogTitle';
import Close from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';

const Login = ({ classes }) => {
	const [ modalShowing, setModalShowing ] = useState(false);
	return (
		<Fragment>
			<Button round onClick={() => setModalShowing(true)}>
				Log In
			</Button>
			<Dialog
				classes={{
					root: classes.modalRoot,
					paper: classes.modal + ' ' + classes.modalLogin,
				}}
				open={modalShowing}
				// TransitionComponent={Transition}
				keepMounted
				onClose={() => setModalShowing(false)}
				aria-labelledby='signup-modal-slide-title'
				aria-describedby='signup-modal-slide-description'
			>
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
							{' '}
							<Button
								simple
								className={classes.modalCloseButton}
								key='close'
								aria-label='Close'
								onClick={() => setModalShowing(false)}
							>
								<Close className={classes.modalClose} />
							</Button>
							<h5 className={classes.cardTitleWhite}>Log in</h5>
							<div className={classes.socialLine}>
								<Button justIcon link className={classes.socialLineButton}>
									<i className='fab fa-facebook-square' />
								</Button>
								<Button justIcon link className={classes.socialLineButton}>
									<i className='fab fa-twitter' />
								</Button>
								<Button justIcon link className={classes.socialLineButton}>
									<i className='fab fa-google-plus-g' />
								</Button>
							</div>
						</CardHeader>
					</DialogTitle>
					<DialogContent id='login-modal-slide-description' className={classes.modalBody}>
						<form>
							<p className={`${classes.description} ${classes.textCenter}`}>
								Or Be Classical
							</p>
						</form>
					</DialogContent>
				</Card>
			</Dialog>
		</Fragment>
	);
};

export default withStyles(ModalStyles)(Login);
