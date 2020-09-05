import React from 'react';
import { Container } from '@material-ui/core';

const Footer = () => {
	return (
		<footer>
			<Container>
				<nav className='menu'>
					<a href='#'>Our Story</a>
					<a href='#'>Reviews</a>
					<a href='#'>Special Menu</a>
					<a href='#'>Reservations</a>
					<a href='#'>Contact Us</a>
				</nav>

				<ul className='social-media'>
					<li>
						<a href='http://www.facebook.com' target='new'>
							<i className='fab fa-facebook-square'></i>
						</a>
					</li>
					<li>
						<a href='http://www.twitter.com' target='new'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a href='https://myaccount.google.com/' target='new'>
							<i className='fab fa-google-plus-g'></i>
						</a>
					</li>
					<li>
						<a href='http://www.instagram.com' target='new'>
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
