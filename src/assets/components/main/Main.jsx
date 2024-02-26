import CardTable from "./price/CardTable";
import Product from "./product/Product";
import Contents from "./contents/Contents";
import Cleants from "./cleants/Cleants";
import Footer from "../footer/Footer";

function Main() {
	return (
		<main className='main'>
			<Product />
			<Contents />
			<CardTable />
			<Cleants />
		</main>
	);
}

export default Main;
