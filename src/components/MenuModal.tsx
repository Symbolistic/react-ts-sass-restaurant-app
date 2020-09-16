import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

type Props = {
	hide: boolean;
	setHide: (hidden: boolean) => void;
};

const MenuModal: React.FC<Props> = ({ hide, setHide }) => {
	return (
		<div id='MenuModal' className={hide ? 'hide' : ''}>
			<div className='modal-container'>
				<button onClick={() => setHide(true)}>X</button>
				<Container>
					<h2 className='category'>Combos</h2>
					<Grid container spacing={2} alignItems='center' justify='center'>
						<Grid item xs={12} md={6} className='item'>
							<h4>DON POLLO COMBO</h4>
							<p>$35.00</p>
						</Grid>
						<Grid item xs={12} md={6} className='item'>
							<h4>PERU COMBO</h4>
							<p>$25.00</p>
						</Grid>

						<Grid item xs={12} md={6} className='item'>
							<h4>NAZCA COMBO</h4>
							<p>$12.50</p>
						</Grid>
						<Grid item xs={12} md={6} className='item'>
							<h4>LIMA COMBO</h4>
							<p>$10.00</p>
						</Grid>
					</Grid>
				</Container>

				<Container>
					<h2 className='category'>Polla A La Brasa</h2>
					<Grid container spacing={3} alignItems='center' justify='center'>
						<Grid item xs={12} md={6} className='item'>
							<h4>POLLO ENTERO</h4>
							<p>$12.00</p>
						</Grid>
						<Grid item xs={12} md={6} className='item'>
							<h4>1/2 CHICKEN</h4>
							<p>$7.00</p>
						</Grid>

						<Grid item xs={12} md={6} className='item'>
							<h4>1/4 CHICKEN</h4>
							<p>$5.00</p>
						</Grid>
					</Grid>
				</Container>

				<Container>
					<h2 className='category'>Entradas / Appetizers</h2>
					<Grid container spacing={3} alignItems='center' justify='center'>
						<Grid item xs={12} md={6} className='item'>
							<h4>PAPA HUANCAINA</h4>
							<p>$8.00</p>
						</Grid>
						<Grid item xs={12} md={6} className='item'>
							<h4>AVOCADO SALAD</h4>
							<p>$7.00</p>
						</Grid>

						<Grid item xs={12} md={6} className='item'>
							<h4>SALCHIPAPA</h4>
							<p>$7.00</p>
						</Grid>
						<Grid item xs={12} md={6} className='item'>
							<h4>CHICHARRON DE CALAMAR</h4>
							<p>$15.00</p>
						</Grid>

						<Grid item xs={12} md={12} className='item'>
							<h4>TAMAL DE POLLO</h4>
							<p>$8.00</p>
						</Grid>
					</Grid>
				</Container>

				<Container>
					<h2 className='category'>Ceviche</h2>
					<Grid container spacing={3} alignItems='center' justify='center'>
						<Grid item xs={12} md={6} className='item'>
							<h4>CEVICHE DE PESCADO</h4>
							<p>$17.00</p>
						</Grid>
						<Grid item xs={12} md={6} className='item'>
							<h4>CEVICHE DE CAMARON</h4>
							<p>$18.00</p>
						</Grid>

						<Grid item xs={12} md={6} className='item'>
							<h4>CEVICHE MIXTO</h4>
							<p>$19.00</p>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default MenuModal;
