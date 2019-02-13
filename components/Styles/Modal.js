import Dialog from '@material-ui/core/Dialog';
import withStyles from '@material-ui/core/styles/withStyles';
import ModalStyles from '../../styles/components/modal';

const Modal = ({ children, classes, ...rest }) => {
	return (
		<Dialog
			classes={{ root: classes.modalRoot, paper: classes.modal + ' ' + classes.modalLogin }}
			{...rest}
		>
			{children}
		</Dialog>
	);
};

export default withStyles(ModalStyles)(Modal);
