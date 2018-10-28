import React from 'react';
import logo from '../images/logo.png';

class Logo extends React.Component {
	render() {
		return (
		<div className='logo-box'>
			<img id='main-logo' src={logo} alt='Górnicka Design'/>
		</div>
	)}
}

export default Logo;