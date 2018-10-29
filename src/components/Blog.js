import React from 'react';
import BlogPost from './BlogPost';

class Blog extends React.Component {
	render() {
		return (
		<div className="blog">
			<BlogPost />
			<BlogPost />
			<BlogPost />
			<BlogPost />
		</div>
	)}
}

export default Blog;