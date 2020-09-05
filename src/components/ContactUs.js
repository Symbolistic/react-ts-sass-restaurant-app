import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const ContactUs = () => {
	return (
		<section id='ContactUs' className='texturebg'>
			<Container>
				<h5 className='comp-title'>Contact Us</h5>
				<h2>Delicious Flavor of Authumn</h2>

				<Grid container spacing={3} justify='center' className='box'>
					<Grid item xs={12} md={6}>
						<div className='title'>Queens, NY</div>
						<h6 className='address'>435 Main St, Jamacia, NY, 12402</h6>
						<p>
							<strong>email: </strong>
							<a href='mailto:info@primesteak.com'>info@primesteak.com</a>
						</p>
					</Grid>
					<Grid item xs={12} md={6}>
						<h6>Dinner Service:</h6>
						<div className='title'>(718)-292-9928</div>
						<h6>Lunch Service: </h6>
						<p>
							Friday, Saturday, and Sunday <br />
							from 12pm to 1:30am
						</p>
						<h6>Dinner Service: </h6>
						<p>
							Daily <br />
							from 6pm to 9:30pm
						</p>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default ContactUs;
