import React, { Fragment } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Slider from './Slider';
import RightColumn from './RightColumn';
import Blog from './Blog';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
    	<React.Fragment>
	      <Logo />
	      <Navbar />
	      <Slider />
	      <RightColumn />
	      <Blog />
	      <Footer />
      	</React.Fragment>
    )
  }
}

export default App;