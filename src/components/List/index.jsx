import Card from "../Card";
import Button from "../Button";
import { useState } from "react";
import Imagem from "../Imagem";
import "./style.css";
import NoCard from "../../img/NoCard.png";

function List({ listTransactions, removeTransaction, stateFilter, handleStateFilter }) {
	

	return (
		<div className='list-cards'>
			<h2 className='list-cards-h2'>Resumo finaceiro</h2>
			<div className='list-cards-buttons'>
				<Button
					onClick={(event) => handleStateFilter(event.target.value)}
					value='todos'
					className='list-button'>
					Todos
				</Button>
				<Button
					onClick={(event) => handleStateFilter(event.target.value)}
					value='entradas'
					className='list-button'>
					Entradas
				</Button>
				<Button
					onClick={(event) => handleStateFilter(event.target.value)}
					value='despesas'
					className='list-button'>
					Despesas
				</Button>
			</div>
			{listTransactions.length === 0 ? (
				<ul>
					<h3>Você ainda não possui nenhum lançamento</h3>
					<Imagem src={NoCard} alt={"sem card"} />
					<Imagem
						className={"noCard-hidden"}
						src={NoCard}
						alt={"sem card"}
					/>
					<Imagem
						className={"noCard-hidden"}
						src={NoCard}
						alt={"sem card"}
					/>
				</ul>
			) : (
				<ul>
					{stateFilter === "todos"
						? listTransactions.map((transaction) => (
								<Card
									transaction={transaction}
									removeTransaction={removeTransaction}
								/>
						  ))
						: stateFilter === "entradas"
						? listTransactions
								.filter(
									(transaction) =>
										transaction.type === "Entrada"
								)
								.map((transaction) => (
									<Card
										transaction={transaction}
										removeTransaction={removeTransaction}
									/>
								))
						: stateFilter === "despesas" &&
						  listTransactions
								.filter(
									(transaction) =>
										transaction.type === "Despesa"
								)
								.map((transaction) => (
									<Card
										transaction={transaction}
										removeTransaction={removeTransaction}
									/>
								))}
				</ul>
			)}
		</div>
	);
}
export default List;
