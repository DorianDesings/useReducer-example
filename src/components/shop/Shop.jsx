import { useState } from 'react';
import Cart from '../cart/Cart';
import Products from '../products/Products';

const Shop = () => {
	const [cart, setCart] = useState([]);
	return (
		<div>
			<Products addProduct={item => addProduct(item, cart, setCart)} />
			<Cart
				cart={cart}
				deleteProduct={id => deleteProduct(id, cart, setCart)}
				deleteAllProducts={() => deleteAllProducts(setCart)}
			/>
		</div>
	);
};

const addProduct = (item, cart, setCart) => {
	const productInCart = cart.find(itemInCart => itemInCart.id === item.id);
	if (!productInCart) {
		setCart([...cart, { ...item, amount: 1 }]);
		return;
	}

	const updatedCart = cart.map(itemInCart => {
		if (itemInCart.id === item.id) itemInCart.amount++;
		return itemInCart;
	});

	setCart(updatedCart);
};

const deleteProduct = (id, cart, setCart) => {
	const updatedCart = cart.filter(product => product.id !== id);
	setCart(updatedCart);
};

const deleteAllProducts = setCart => {
	setCart([]);
};

export default Shop;
