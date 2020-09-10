import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { Store } from './Store';

const TopImg = () => {
	const store = useContext(Store);
	return (
		<section id='TopImg'>
			<Container>
				<div className='title'>
					<h5>Welcome</h5>
					<h1>{store.companyInfo.title}</h1>
				</div>

				<div className='contact-info'>
					<Container>
						<div className='booking'>Book Table Directly</div>
						<h2>{store.companyInfo.phone}</h2>
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
