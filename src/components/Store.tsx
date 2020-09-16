import React, { createContext } from 'react';

interface CompanyInfo {
	title: string;
	phone: string;
	location: string;
}

const companyInfo: CompanyInfo = {
	title: 'Don Pollo, Peruvian CUISINE',
	phone: '(718) 647-0007',
	location: 'Ozone Park, NY',
};

interface SpecialMenuItem {
	class: string;
	title: string;
	description: string;
	price: number;
}

const specialMenuData = [
	{
		class: 'donpollo',
		title: 'Don Pollo',
		description:
			'Whole chicken, Peruvian fried rice, french fries with sliced hotdog, sweet yellow plantain and salad',
		price: 35,
	},
	{
		class: 'rotischicken',
		title: 'Rotisserie Chicken',
		description:
			'Not much needs to be said, you know this looks good, and it tastes better',
		price: 15,
	},
	{
		class: 'arroz',
		title: 'Arroz Chaufa',
		description:
			'Peruvian Style Fried rice with scrambled eggs, scallions, peppers, corn & soy sauce.',
		price: 10,
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
		company: 'Yelp',
		author: 'Samina C.',
		authorInfo: 'Local Foodie',
		highlight: 'Best Peruvian food in the area!',
		review:
			'Love coming here for some good ol Peruvian food! Their food is always on point no matter what time of day I go or any day as a matter of fact! The Don Pollo special comes with so much food only for $31.00! Now that is a steal for a whole lot of yummy food! Share it with people or take the rest for another whole meal! It is just so good especially with their addicting green sauce.',
	},
	{
		company: 'Grubhub',
		author: 'Karla',
		authorInfo: 'Local Foodie',
		highlight: 'Its so good!',
		review:
			'This is my third time getting food there. Each time, the food is always excellent. Their combo deal is really good too. Cannot wait to go back!',
	},
	{
		company: 'Trip Advisor',
		author: 'Miguels S',
		authorInfo: 'Traveling Foodie',
		highlight: 'Hidden Gem!',
		review:
			'Upon arriving you are greeted at the door by the staff. The food here is consistent with the traditional cuisine that you would find in Peru. Honestly speaking I have eaten at other Peruvian restaurants throughout NYC and this place can go up against any of them. If you are in the area stop in you wont be sorry.',
	},
	{
		company: 'Google Review',
		author: 'K Man',
		authorInfo: 'Local Guide',
		highlight: 'AMAZING!',
		review:
			'Loved it! Food was good and decently priced. Staff was friendly. Eating good in the neighborhood. Chicken was tender and the green sauce was too good, could not get enough. Also, the restaurant is hidden yet like in the center of intersection and plenty of natural light if you get a booth by the window. Not too far from train too but I drove. Street parking and on site parking available.',
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
