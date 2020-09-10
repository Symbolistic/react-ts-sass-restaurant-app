import React, { createContext } from 'react';

interface CompanyInfo {
	title: string;
	phone: string;
	location: string;
}

const companyInfo: CompanyInfo = {
	title: 'Prime Steak Restaurant',
	phone: '(718)-219-8652',
	location: 'Lefferts, Queens, NY',
};

interface SpecialMenuItem {
	title: string;
	description: string;
	price: number;
}

const specialMenuData = [
	{
		title: 'Super BBQ Grill No Smoke',
		description:
			'Fried eggs, Steak, Baked potato, or french fries, side of vegetables',
		price: 25,
	},
	{
		title: 'Chicken Fingers',
		description:
			'Fried eggs, Steak, Baked potato, or french fries, side of vegetables',
		price: 15,
	},
	{
		title: 'All American Hamburger',
		description:
			'Fried eggs, Steak, Baked potato, or french fries, side of vegetables',
		price: 30,
	},
];

interface Review {
	company: string;
	author: string;
	authorInfo: string;
	highlight: string;
	review: string;
}

const reviewsData = [
	{
		company: 'The Food Network',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner of The Chef Masters',
		highlight: 'Best Restaurant in the NY area!',
		review:
			'Fixie mlkshk vexillologist VHS knausgaard health goth, messenger bag vegan brunch meh waistcoat bitters. Woke paleo offal food truck viral letterpress lyft stumptown skateboard schlitz kombucha meditation ethical actually.',
	},
	{
		company: 'HBO',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner of The Chef Masters',
		highlight: 'Best Restaurant in the NY area!',
		review:
			'Fixie mlkshk vexillologist VHS knausgaard health goth, messenger bag vegan brunch meh waistcoat bitters. Woke paleo offal food truck viral letterpress lyft stumptown skateboard schlitz kombucha meditation ethical actually.',
	},
	{
		company: 'CWB',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner of The Chef Masters',
		highlight: 'Best Restaurant in the NY area!',
		review:
			'Fixie mlkshk vexillologist VHS knausgaard health goth, messenger bag vegan brunch meh waistcoat bitters. Woke paleo offal food truck viral letterpress lyft stumptown skateboard schlitz kombucha meditation ethical actually.',
	},
	{
		company: 'NBC',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner of The Chef Masters',
		highlight: 'Best Restaurant in the NY area!',
		review:
			'Fixie mlkshk vexillologist VHS knausgaard health goth, messenger bag vegan brunch meh waistcoat bitters. Woke paleo offal food truck viral letterpress lyft stumptown skateboard schlitz kombucha meditation ethical actually.',
	},
	{
		company: 'The New York Times',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner of The Chef Masters',
		highlight: 'Best Restaurant in the NY area!',
		review:
			'Fixie mlkshk vexillologist VHS knausgaard health goth, messenger bag vegan brunch meh waistcoat bitters. Woke paleo offal food truck viral letterpress lyft stumptown skateboard schlitz kombucha meditation ethical actually.',
	},
];

interface Quote {
	author: string;
	quote: string;
}

const randomQuoteData = [
	{
		author: 'Thomas Keller',
		quote:
			'A Recipe Has No Soul. You As The Cook Must Bring Soul To The Recipe.',
	},
	{
		author: 'Johnny',
		quote: 'Best Hamburgers in town!',
	},
	{
		author: 'Lana',
		quote: 'Everyone needs to try the BBQ here!',
	},
];

interface GlobalState {
	companyInfo: CompanyInfo;
	specialMenuData: SpecialMenuItem[];
	reviewsData: Review[];
	randomQuoteData: Quote[];
}

const globalState: GlobalState = {
	companyInfo,
	specialMenuData,
	reviewsData: reviewsData,
	randomQuoteData: randomQuoteData,
};

export const Store = createContext<GlobalState>(globalState);

export function StoreProvider(props: any): JSX.Element {
	return <Store.Provider value={globalState}>{props.children}</Store.Provider>;
}
