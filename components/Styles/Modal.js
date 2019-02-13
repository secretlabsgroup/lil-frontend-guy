import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  overflow: auto;
  display: block;
  
  .root {
    max-width: 500px;
  margin: 1.75rem auto;
  border-radius: 6px;
  overflow: visible;
  width: 100%;
  margin-top: 130px !important;
  }
`;
const Modal = ({ children, ...rest }) => {
	return (
		<StyledDialog {...rest}>
			<div className='root'>{children}</div>
		</StyledDialog>
	);
};

export default Modal;
