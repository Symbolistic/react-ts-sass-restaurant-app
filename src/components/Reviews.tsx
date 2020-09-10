import React, { useContext, useState } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Store } from './Store';

const Reviews = () => {
	const store = useContext(Store);
	const [currentReviewNum, setCurrentReviewNum] = useState(0);

	const currentReview = () => {
		return (
			<div>
				<h5 className='comp-title'>REVIEWS</h5>
				<h2>{store.reviewsData[currentReviewNum].company}</h2>
				<h4>{store.reviewsData[currentReviewNum].highlight}</h4>
				<p>{store.reviewsData[currentReviewNum].review}</p>
				<div className='author'>
					<strong>{store.reviewsData[currentReviewNum].author}</strong> -{' '}
					<em>{store.reviewsData[currentReviewNum].authorInfo}</em>
				</div>
			</div>
		);
	};

	const reviewRight = () => {
		if (currentReviewNum < store.reviewsData.length - 1) {
			setCurrentReviewNum(currentReviewNum + 1);
		}
	};

	const reviewLeft = () => {
		if (currentReviewNum > 0) {
			setCurrentReviewNum(currentReviewNum - 1);
		}
	};

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
						{currentReview()}
						<div className='arrows'>
							<i
								className={`fas fa-arrow-left ${
									currentReviewNum > 0 ? 'ready' : ''
								}`}
								onClick={reviewLeft}
							></i>
							<i
								className={`fas fa-arrow-right ${
									currentReviewNum === store.reviewsData.length - 1
										? ''
										: 'ready'
								}`}
								onClick={reviewRight}
							></i>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Reviews;
