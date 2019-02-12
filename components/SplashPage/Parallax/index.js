import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import styled from 'styled-components';
// import image from '../../../static/splash.png';

const Wrapper = styled.div`
	height: 100vh;
	max-height: 1600px;
	overflow: hidden;
	position: relative;
	background-position: 50%;
	background-size: cover;
	margin: 0;
	padding: 0;
	border: 0;
	display: flex;
	align-items: center;
	background-image: url('https://images.unsplash.com/photo-1499309221416-e18ee3411c38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
	transform: translate3d(0, ${props => props.windowScrollTop}px, 0);

	.container {
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
		width: 100%;
		color: "#FFFFFF";
		z-index: 2;
		@media (min-width: 576px) {
			max-width: 540px;
		}
		@media (min-width: 768px) {
			max-width: 720px;
		}
		@media (min-width: 992px) {
			max-width: 960px;
		}
		@media (min-width: 1200px) {
			max-width: 1140px;
		}

		h1 {
			line-height: 60px;
			font-size: 53px;
			font-weight: 700;
			margin-top: 30px;
			margin-bottom: 25px;
			min-height: 32px;
			color: #ffffff;
			text-decoration: none;
			font-family: 'Roboto Slab', serif;
		}
		h4 {
			color: #ffffff;
			font-weight: 300;
			font-size: 18px;
		}
	}
`;
const Parallax = ({ children }) => {
	let [ windowScrollTop, setWindowScrollTop ] = useState(0);
	useEffect(() => {
		if (window.innerWidth >= 768) {
			setWindowScrollTop(window.pageYOffset / 3);
		} else {
			setWindowScrollTop(0);
		}
		window.addEventListener('scroll', resetTransform);
	}, []);

	const resetTransform = () => {
		setWindowScrollTop(window.pageYOffset / 3);
	};
	return <Wrapper windowScrollTop={windowScrollTop}>{children}</Wrapper>;
};

export default Parallax;
