import React from 'react';
import { Container } from '@material-ui/core';

const RandomQuote = () => {
	return (
		<section id='RandomQuote'>
			<Container>
				<h1>
					“A recipe has no soul. You as the cook must bring soul to the recipe.”
				</h1>
				<span className='author'>– Thomas Keller -</span>
			</Container>
		</section>
	);
};

export default RandomQuote;
