import Button from "../Button";

function Card({ transaction, index }) {
	const { description, type, value } = transaction;
	return (
		<li className='card' key={index}>
			<div
				className={
					type === "Entrada" ? "card-color-green" : "card-color-grey"
				}></div>
			<h2 className='card-title'>{description}</h2>
			<span className='card-type'>{type}</span>
			<span className='card-value'>R$ {value}</span>
			<Button className='card-button'>icon</Button>
		</li>
	);
}
export default Card;
