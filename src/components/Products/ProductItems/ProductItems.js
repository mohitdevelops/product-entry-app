import ProductsList from "../ProductsList";

export default function ProductItems({ productListItems, checkFilterYear }) {

	// Filter product list as per the selected year 
	const filterProducts = productListItems.filter((products) => {
		return products.date.getFullYear().toString() === checkFilterYear;
	});

	return (
		<div className="productItemsWrapper">
			<ProductsList productItemList={filterProducts} />
		</div>
	);
}
