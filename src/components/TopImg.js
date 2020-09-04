import React from 'react';
import { Container } from '@material-ui/core';

const TopImg = () => {
	return (
		<section id='TopImg'>
			<Container>
				<div className='title'>
					<h5>Welcome</h5>
					<h1>
						Prime Steak <br />
						Resturant
					</h1>
				</div>

				<div className='contact-info'>
					<Container>
						<div className='booking'>Book Table Directly</div>
						<h2>(718)-292-9928</h2>
						<div className='hours'>
							Opening Hours <strong>Mon - Fri: </strong> 9am - 9pm
							<strong> Weekend: </strong> 9am - 11pm
						</div>
					</Container>
				</div>
			</Container>
		</section>
	);
};

export default TopImg;
