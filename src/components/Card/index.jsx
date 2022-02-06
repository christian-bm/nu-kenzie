import Button from "../Button";
import { FaTrash } from "react-icons/fa";
import "./style.css";

function Card({ transaction, removeTransaction }) {
	const { id, description, type, value } = transaction;

	const findId = (event) => {
		const trasactionId = event.currentTarget.parentNode.parentNode.id
		removeTransaction(trasactionId)
	}

	return (
		<li className='card' key={id} id={id}>
			<div
				className={
					type === "Entrada" ? "card-color-green" : "card-color-grey"
				}></div>
			<div className='card-main'>
				<h2 className='card-title'>{description}</h2>
				<span className='card-value'>R$ {type === "Entrada" ? `${value}` : `-${value}`}</span>
				<Button onClick={findId} className='card-button'>{<FaTrash />}</Button>
				<span className='card-type'>{type}</span>
			</div>
		</li>
	);
}
export default Card;
