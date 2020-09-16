import React from 'react';
import { Container } from '@material-ui/core';

const Header = () => {
	return (
		<header>
			<Container className='header-nav'>
				<div className='logo'></div>
				<label htmlFor='hamburger'>
					<i className='fas fa-bars'></i>
				</label>
				<input type='checkbox' id='hamburger' />

				<div className='nav'>
					<a href='#TopImg'>Home</a>
					<a href='#OurStory'>About Us</a>
					<a href='#ContactUs'>Location</a>
					<a href='#SpecialMenu'>Menu</a>
					<a href='#ContactUs'>Reservations</a>
				</div>
			</Container>
		</header>
	);
};

export default Header;
