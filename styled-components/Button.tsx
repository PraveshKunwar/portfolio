import { ButtonType } from 'react-bootstrap/esm/Button';
import styled from 'styled-components';
import { ButtonTypes } from '../interfaces/ButtonTypes';

export const ShowMore = styled.button`
	border-radius: ${(props: ButtonTypes) =>
		props.radius ? props.radius : '0px'};
	text-align: center;
	color: ${(props: ButtonTypes) => (props.color ? props.color : false)};
	border-width: 0px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	font-size: 30px;
	background: #03071e;
	background-size: 200%;
	transition: 0.5s ease-out;
	&:visited {
		color: ${(props: ButtonTypes) => (props.color ? props.color : false)};
	}
	&:focus {
		outline: none;
	}
	&:hover {
		background-position: left;
	}
	> a {
		text-decoration: none;
		font-family: 'Inter', 'Roboto', 'Oswald';
		color: ${(props: ButtonTypes) => (props.color ? props.color : false)};
	}
`;
