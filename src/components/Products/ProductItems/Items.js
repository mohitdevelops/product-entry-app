import ItemDate from "./ItemDate";

export default function Items({
	productImage,
	productName,
	productDate,
	productDescription,
	productPrice,
}) {
	return (
        // Product item data 
		<div className="productItem">
			<div className="productImage">
				<img src={productImage} />
			</div>
			<div className="productDes">
				<div className="productTopBar">
					<h3>{productName}</h3>
					<ItemDate itemDate={productDate} />
				</div>
				<div className="productBottomBar">
					<p>{productDescription}</p>
					<div className="price">
						<span>&#8377; </span>
						{productPrice}
					</div>
				</div>
			</div>
		</div>
	);
}
