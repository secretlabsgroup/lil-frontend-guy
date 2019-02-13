import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

const StyledButton = styled(Button)`
  min-height: auto;
  min-width: auto;
  background-color: white !important;
  color: gray;
  box-shadow:
      0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);
  border: none;
  border-radius: ${props => (props.styles.round ? '30px' : '3px')};
  position: relative;
  padding: 12px 30px;
  margin: .3125rem 1px;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;
  will-change: box-shadow, transform;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.42857143;
  text-align: center;
  white-space: no-wrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  width: ${props => props.styles.fullWidth && '100%'};
  

`;

function RegularButton(props) {
	const {
		classes,
		color,
		round,
		children,
		fullWidth,
		disabled,
		simple,
		size,
		block,
		link,
		justIcon,
		fileButton,
		className,
		...rest
	} = props;
	const btnStyles = {
		button: true,
		size,
		color,
		round,
		fullWidth,
		disabled,
		simple,
		block,
		link,
		justIcon,
		fileButton,
		// [classes[color]]: color,
		// [classes.round]: round,
		// [classes.fullWidth]: fullWidth,
		// [classes.disabled]: disabled,
		// [classes.simple]: simple,
		// [classes.block]: block,
		// [classes.link]: link,
		// [classes.justIcon]: justIcon,
		// [classes.fileButton]: fileButton,
		// [className]: className,
	};
	return (
		<StyledButton {...rest} styles={btnStyles}>
			{children}
		</StyledButton>
	);
}

// RegularButton.propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.oneOf([
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "rose",
//     "white",
//     "twitter",
//     "facebook",
//     "google",
//     "linkedin",
//     "pinterest",
//     "youtube",
//     "tumblr",
//     "github",
//     "behance",
//     "dribbble",
//     "reddit",
//     "instagram",
//     "transparent"
//   ]),
//   size: PropTypes.oneOf(["sm", "lg"]),
//   simple: PropTypes.bool,
//   round: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   disabled: PropTypes.bool,
//   block: PropTypes.bool,
//   link: PropTypes.bool,
//   justIcon: PropTypes.bool,
//   fileButton: PropTypes.bool
// };

export default RegularButton;
