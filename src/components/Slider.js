import React from 'react';
import photo from '../images/gallery.jpg';

class Slider extends React.Component {
	render() {
		return (
			<div className="gallery">
				<figure className="photo">
					<img className="photo" src={photo} alt="Pink Book"/>
				</figure>
			</div>
	)}
}

export default Slider;