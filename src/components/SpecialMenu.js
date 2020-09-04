import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const SpecialMenu = () => {
	return (
		<section id='SpecialMenu' className='texturebg'>
			<Container>
				<h5 className='comp-title'>Special Menu</h5>
				<h2>Delicious Flavor of Authumn</h2>
				<Grid
					container
					spacing={3}
					alignItems='center'
					justify='center'
					className='boxes'
				>
					<Grid item xs={12} md={4}>
						<div className='box'>
							<div className='box-img'>
								<div className='price-circle'>$25</div>
							</div>

							<span className='title'>Super BBQ Grill No Smoke</span>
							<p className='details'>
								Fried eggs, Steak, Baked potato, or french fries, side of
								vegetables
							</p>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className='box'>
							<div className='box-img'>
								<div className='price-circle'>$25</div>
							</div>

							<span className='title'>Super BBQ Grill No Smoke</span>
							<p className='details'>
								Fried eggs, Steak, Baked potato, or french fries, side of
								vegetables
							</p>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className='box'>
							<div className='box-img'>
								<div className='price-circle'>$25</div>
							</div>

							<span className='title'>Super BBQ Grill No Smoke</span>
							<p className='details'>
								Fried eggs, Steak, Baked potato, or french fries, side of
								vegetables
							</p>
						</div>
					</Grid>
				</Grid>
				<a href='#' className='link'>
					View Full Menu
				</a>
			</Container>
		</section>
	);
};

export default SpecialMenu;
