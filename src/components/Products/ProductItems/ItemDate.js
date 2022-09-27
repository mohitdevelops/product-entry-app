export default function ItemDate({ itemDate }) {
	const month = itemDate.getMonth();
	const day = itemDate.toLocaleString("en-US", { day: "2-digit" });
	const year = itemDate.getFullYear();
	return (
		<div className="productitemDate">
			{day}-{month}-{year}
		</div>
	);
}
