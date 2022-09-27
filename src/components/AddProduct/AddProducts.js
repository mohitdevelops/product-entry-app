import { useState } from "react";
import ProductEntryForm from "./ProductEntryForm";

export default function AddProduct({ onNewProductAdded }) {
	const [isAdding, setIsAdding] = useState(false);

	const newProductDataAdded = (item) => {
		onNewProductAdded(item);
	};

	const startAddingHandler = () => {
		setIsAdding(true);
	};

	const cancelAddingHandler = () => {
		setIsAdding(false);
	};

	return (
		<div>
			<h2>Add products</h2>
			{!isAdding && (
				<button onClick={startAddingHandler} className="addNewBtn">
					Add new product
				</button>
			)}
			{isAdding && (
				<ProductEntryForm
					onNewProductSubmit={newProductDataAdded}
					onCancel={cancelAddingHandler}
				/>
			)}
			<p>Empty input and invalid price value won't work</p>
		</div>
	);
}
