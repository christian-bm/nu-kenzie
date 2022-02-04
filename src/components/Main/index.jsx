import Card       from "../Card";
import Form       from "../Form";
import List       from "../List";
import TotalMoney from "../TotalMoney";

function Main({ listTransactions, handleListTransactions}) {
	return (
		<main>
			<Form handleListTransactions={handleListTransactions}/>
			<List listTransactions={listTransactions}>
				<Card />
			</List>
			<TotalMoney listTransactions={listTransactions}/>
		</main>
	);
}
export default Main;
