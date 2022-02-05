import Card from "../Card";
import Form from "../Form";
import List from "../List";
import TotalMoney from "../TotalMoney";
import "./style.css";

function Main({ listTransactions, handleListTransactions }) {
	return (
		<main className="main-home">
			<section>
				<Form handleListTransactions={handleListTransactions} />
				<TotalMoney listTransactions={listTransactions} />
			</section>
			<List listTransactions={listTransactions}>
				<Card />
			</List>
		</main>
	);
}
export default Main;
