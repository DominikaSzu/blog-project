import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="menu">
				MENU
				</div>
				<div className="categories">
					<div className="category about-me">O mnie</div>
					<div className="category blog">Blog</div>
					<div className="category beauty-events">Eventy Urodowe</div>
					<div className="category makeup">Makijaż</div>
					<div className="category makeup-bride">Makijaż Ślubny</div>
					<div className="category fashion">Stylizacje</div>
					<div className="category t-shirts">T-Shirty Górnicka Design</div>
				</div>
			</div>
	)}
}

export default Navbar;