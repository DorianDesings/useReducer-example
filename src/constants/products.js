import { v4 } from 'uuid';

const products = [
	{
		id: v4(),
		name: 'Manzana',
		price: 1.99
	},
	{
		id: v4(),
		name: 'Plátano',
		price: 0.99
	},
	{
		id: v4(),
		name: 'Fresa',
		price: 2.49
	},
	{
		id: v4(),
		name: 'Uva',
		price: 3.99
	},
	{
		id: v4(),
		name: 'Kiwi',
		price: 2.29
	}
];

export default products;
