import Card from "../Card";
import Button from "../Button";
import { useState } from 'react'

function List({ listTransactions }) {
    const [stateFilter, setStateFilter] = useState("todos")

    function handleStateFilter(value){
        setStateFilter(value)
    }

	return (
		<div>
			<Button onClick={(event) => handleStateFilter(event.target.value)} value="todos">Todos</Button>
			<Button onClick={(event) => handleStateFilter(event.target.value)} value="entradas">Entradas</Button>
			<Button onClick={(event) => handleStateFilter(event.target.value)} value="despesas">Despesas</Button>
			<ul>
				{stateFilter === 'todos' ?
				listTransactions.map((transaction, index) => (
					<Card transaction={transaction} index={index} />
				))
				:
				stateFilter === 'entradas' ?
				listTransactions.filter((transaction) => transaction.type === 'Entrada').map((transaction, index) => (
					<Card transaction={transaction} index={index} />
				))
				:
				stateFilter === 'despesas' &&
				listTransactions.filter((transaction) => transaction.type === 'Despesa').map((transaction, index) => (
					<Card transaction={transaction} index={index} />
				))
			}
			</ul>
		</div>
	);
}
export default List;
