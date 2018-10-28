import React from 'react';
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
    	<div className='wrapper'>
	      <Logo />
	      <Navbar />
	      <Slider />
	      <RightColumn />
	      <Blog />
	      <InstagramInfo />
	      <Footer />
      	</div>
    )
  }
}

export default App;