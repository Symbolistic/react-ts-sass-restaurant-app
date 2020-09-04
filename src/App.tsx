import React from 'react';
import Header from './components/Header';
import TopImg from './components/TopImg';
import OurStory from './components/OurStory';
import SpecialMenu from './components/SpecialMenu';
import RandomQuote from './components/RandomQuote';

function App() {
	return (
		<div className='App'>
			<Header />
			<TopImg />
			<OurStory />
			<SpecialMenu />
			<RandomQuote />
		</div>
	);
}

export default App;
