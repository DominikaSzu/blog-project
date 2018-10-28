import React from 'react';
import logo from '../images/logo.png';

class Logo extends React.Component {
	render() {
		return (
		<div className='logoBox'>
			<img id='logo' src={logo} alt='Górnicka Design'/>
		</div>
	)}
}

export default Logo;