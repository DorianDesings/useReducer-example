const Cart = ({ cart, deleteProduct, deleteAllProducts }) => {
	return (
		<div>
			<h2>Cart</h2>
			{cart.length === 0 && <p>Empty cart</p>}
			<ul>
				{cart.map(item => (
					<li key={item.id}>
						{item.name} - {item.price} € - Amount: {item.amount}
						<button onClick={() => deleteProduct(item.id)}>
							Remove Product
						</button>
					</li>
				))}
			</ul>
			{cart.length !== 0 && (
				<button onClick={deleteAllProducts}>Remove All Products</button>
			)}
		</div>
	);
};

export default Cart;
