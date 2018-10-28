import React, { Fragment } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Slider from './Slider';
import RightColumn from './RightColumn';
import Blog from './Blog';
import InstagramInfo from './InstagramInfo';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
    	<Fragment>
	      <Logo />
	      <Navbar />
	      <Slider />
	      <RightColumn />
	      <Blog />
	      <InstagramInfo />
	      <Footer />
      	</Fragment>
    )
  }
}

export default App;