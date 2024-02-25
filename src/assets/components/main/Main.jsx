import CardTable from "./price/CardTable";
import Product from "./product/Product";
import Contents from "./contents/Contents";

function Main() {
	return (
		<main className='main'>
			<Product />
			<Contents />
			<CardTable />
		</main>
	);
}

export default Main;
