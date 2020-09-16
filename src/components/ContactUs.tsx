import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Store } from './Store';

const ContactUs = () => {
	const store = useContext(Store);

	return (
		<section id='ContactUs' className='texturebg'>
			<Container>
				<h5 className='comp-title'>Contact Us</h5>
				<h2>We would love to hear from you!</h2>

				<Grid container spacing={3} justify='center' className='box'>
					<Grid item xs={12} md={6}>
						<div className='title'>{store.companyInfo.location}</div>
						<h6 className='address'>8302 95th Avenue, Ozone Park, NY 11416</h6>
						<p>
							<strong>email: </strong>
							<a href='mailto:info@primesteak.com'>info@donpollonyc.com</a>
						</p>
					</Grid>
					<Grid item xs={12} md={6}>
						<h6>Dinner Service:</h6>
						<div className='title'>{store.companyInfo.phone}</div>
						<h6>Lunch Service: </h6>
						<p>
							Friday, Saturday, and Sunday <br />
							from 12pm to 8:00pm
						</p>
						<h6>Dinner Service: </h6>
						<p>
							Daily <br />
							from 12pm to 8:00pm
						</p>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default ContactUs;
