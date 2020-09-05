import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const Reviews = () => {
	return (
		<section id='Reviews'>
			<Container>
				<Grid container spacing={3} alignItems='center' justify='center'>
					<Grid item xs={12} md={8}>
						<img
							src='https://hotpot.ee/en/wp-content/uploads/manoj.jpg'
							alt='chef'
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<h5 className='comp-title'>REVIEWS</h5>
						<h2>The Food Network</h2>
						<h4>"Best Restaurant in the L.A area!"</h4>
						<p>
							Fixie mlkshk vexillologist VHS knausgaard health goth, messenger
							bag vegan brunch meh waistcoat bitters. Woke paleo offal food
							truck viral letterpress lyft stumptown skateboard schlitz kombucha
							meditation ethical actually.
						</p>
						<div className='author'>
							<strong>Joe Bastiachi</strong> -{' '}
							<em>winner of the chef masters</em>
						</div>
						<div className='arrows'>
							<i className='fas fa-arrow-left'></i>
							<i className='fas fa-arrow-right ready'></i>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Reviews;
