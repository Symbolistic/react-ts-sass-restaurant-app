import React from 'react';
import { Container } from '@material-ui/core';

const Footer = () => {
	return (
		<footer>
			<Container>
				<nav className='menu'>
					<a href='#OurStory'>Our Story</a>
					<a href='#Reviews'>Reviews</a>
					<a href='#SpecialMenu'>Special Menu</a>
					<a href='#ContactUs'>Reservations</a>
					<a href='#ContactUs'>Contact Us</a>
				</nav>

				<ul className='social-media'>
					<li>
						<a
							href='https://www.facebook.com/donpollonyc/?fref=ts'
							target='new'
						>
							<i className='fab fa-facebook-square'></i>
						</a>
					</li>
					<li>
						<a href='https://twitter.com/donpollonyc' target='new'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/donpollorestaurant/'
							target='new'
						>
							<i className='fab fa-instagram'></i>
						</a>
					</li>
				</ul>

				<div className='copyright'>
					&#169; 2020 Copyright <br />
					Developed by Vishon Singh
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
