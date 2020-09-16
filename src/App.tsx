import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TopImg from './components/TopImg';
import OurStory from './components/OurStory';
import SpecialMenu from './components/SpecialMenu';
import RandomQuote from './components/RandomQuote';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';

function App() {
	const [hide, setHide] = useState<any>(true);

	useEffect(() => {
		if (!hide) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [hide]);

	return (
		<div className='App'>
			<Header />
			<TopImg />
			<OurStory />
			<SpecialMenu setHide={setHide} />
			<RandomQuote />
			<Reviews />
			<ContactUs />
			<Footer />
			<MenuModal hide={hide} setHide={setHide} />
		</div>
	);
}

export default App;
