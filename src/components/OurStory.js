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
						<h2>Cooking is the art of adjustment</h2>
						<p>
							Fixie mlkshk vexillologist VHS knausgaard health goth, messenger
							bag vegan brunch meh waistcoat bitters. Woke paleo offal food
							truck viral letterpress lyft stumptown skateboard schlitz kombucha
							meditation ethical actually. Crucifix master cleanse lomo,
							jianbing meditation meggings heirloom sartorial vape church-key
							synth artisan iceland austin sriracha. Sustainable salvia seitan
							coloring book tattooed butcher.
						</p>
						<div className='quote'>
							"The best steak in New York" - <strong>Thomas Eggsy</strong>
						</div>
						<a href='#' className='reserve-btn'>
							Reserve
						</a>
					</Grid>

					<Grid item xs={12} md={6} className='video-img col'>
						ok
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default OurStory;
