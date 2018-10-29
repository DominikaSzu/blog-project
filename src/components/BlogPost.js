import React from 'react';
import dog from '../images/dog.jpg';

class BlogPost extends React.Component {
	render() {
		return (
			<article className="blog-post">
				<img src={dog} alt="dog" className="blog-post-photo"/>
				<h3 className="title">Danish sweet chocolate</h3>
				<p className="post-content">
				Gummi bears gingerbread wafer jelly beans icing tootsie roll fruitcake apple pie halvah. Cupcake sugar plum liquorice oat cake. Halvah bonbon dessert chocolate cake pastry brownie. Cake candy canes biscuit marzipan macaroon jujubes.	
				</p>
				<button className="read-more">Przeczytaj</button>
			</article>
	)}
}

export default BlogPost;