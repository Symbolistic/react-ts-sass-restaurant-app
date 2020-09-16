import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Store } from './Store';

type Props = {
	setHide: (hidden: boolean) => void;
};

const SpecialMenu: React.FC<Props> = ({ setHide }) => {
	const store = useContext(Store);

	// This will loop through specialMenuData to get all the special menu items
	const loopMenu = () => {
		return store.specialMenuData.map((item) => {
			return (
				<Grid item xs={12} md={4} key={item.title}>
					<div className='box'>
						<div className={`box-img ${item.class}`}>
							<div className='price-circle'>{item.price}</div>
						</div>

						<span className='title'>{item.title}</span>
						<p className='details'>{item.description}</p>
					</div>
				</Grid>
			);
		});
	};

	return (
		<section id='SpecialMenu' className='texturebg'>
			<Container>
				<h5 className='comp-title'>Special Menu</h5>
				<h2>Delicious Flavor of Peru</h2>
				<Grid
					container
					spacing={3}
					alignItems='center'
					justify='center'
					className='boxes'
				>
					{loopMenu()}
				</Grid>
				<button onClick={() => setHide(false)}>View Full Menu</button>
			</Container>
		</section>
	);
};

export default SpecialMenu;
