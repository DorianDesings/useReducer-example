import products from '../../constants/products';

const Products = ({ addProduct }) => {
	return (
		<div>
			<h2>Productos</h2>
			<ul>
				{products.map(item => (
					<li key={item.id}>
						{item.name} - {item.price} €
						<button onClick={() => addProduct(item)}>Comprar</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
