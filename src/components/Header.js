import React from 'react';
import { Container } from '@material-ui/core';

const Header = () => {
	return (
		<header>
			<Container className='header-nav'>
				<div className='logo'>Logo Here</div>
				<div className='nav'>
					<a href='#'>Home</a>
					<a href='#'>Party Platters</a>
					<a href='#'>Locations</a>
					<a href='#'>Rewards</a>
					<a href='#'>Reservations</a>
				</div>
			</Container>
		</header>
	);
};

export default Header;
