import React from 'react';
import Header from './components/Header';
import TopImg from './components/TopImg';
import OurStory from './components/OurStory';
import SpecialMenu from './components/SpecialMenu';
import RandomQuote from './components/RandomQuote';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<TopImg />
			<OurStory />
			<SpecialMenu />
			<RandomQuote />
			<Reviews />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
