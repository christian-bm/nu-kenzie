import Button from "../Button";
import { FaTrash } from "react-icons/fa";
import "./style.css";

function Card({ transaction, index }) {
	const { description, type, value } = transaction;
	return (
		<li className='card' key={index}>
			<div
				className={
					type === "Entrada" ? "card-color-green" : "card-color-grey"
				}></div>
			<div className='card-main'>
				<h2 className='card-title'>{description}</h2>
				<span className='card-value'>R$ {value}</span>
				<Button className='card-button'>{<FaTrash />}</Button>
				<span className='card-type'>{type}</span>
			</div>
		</li>
	);
}
export default Card;
