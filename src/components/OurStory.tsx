import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const OurStory = () => {
	return (
		<section id='OurStory'>
			<Container>
				<Grid container spacing={3} alignItems='center' justify='center'>
					<Grid item xs={12} md={6}>
						<h5 className='comp-title'>Our Story</h5>
						<h2>Authentic Peruvian Food</h2>
						<p>
							We have been part of the community for over 10 years and greatly
							appreciate our neighbors/patrons. Staff are friendly and helpful
							to the people who are first time and coming to test Peruvian food.
							Small restaurant, clean, fresh flavor. Famous Peruvian food
							rotisserie and ceviche served well. Mixed seafood, full of flavour
							and crunchy.
						</p>
						<div className='quote'>
							"The best peruvian chicken in the area" -{' '}
							<strong>Victor Gomez</strong>
						</div>
						<a href='#ContactUs' className='reserve-btn'>
							Reserve
						</a>
					</Grid>

					<Grid item xs={12} md={6} className='video-img col'></Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default OurStory;
