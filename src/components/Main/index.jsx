import Card from "../Card";
import Form from "../Form";
import List from "../List";
import TotalMoney from "../TotalMoney";
import "./style.css";
import { useState } from "react";

function Main({ listTransactions, handleListTransactions, removeTransaction }) {
	const [stateFilter, setStateFilter] = useState("todos");

	function handleStateFilter(value) {
		setStateFilter(value);
	}
	return (
		<main className='main-home'>
			<section>
				<Form
					handleListTransactions={handleListTransactions}
					listTransactions={listTransactions}
				/>
				<TotalMoney
					listTransactions={listTransactions}
					stateFilter={stateFilter}
				/>
			</section>
			<List
				listTransactions={listTransactions}
				removeTransaction={removeTransaction}
				stateFilter={stateFilter}
				handleStateFilter={handleStateFilter}></List>
		</main>
	);
}
export default Main;
