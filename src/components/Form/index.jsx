import { useState } from "react";
import Button from "../Button";
import "./style.css";

function Form({ handleListTransactions, listTransactions }) {
	const [description, setDescription] = useState("");
	const [value, setValue] = useState("");
	const [type, setType] = useState("Entrada");

	const creatId = (list) => {
		const lastId = list.reduce((newId, {id}) => id > newId ? newId =  id : id,0)
		return lastId
	}

	const captureForm = (event) => {
		event.preventDefault();
		if (description !== "" && value !== "") {
			const transaction = {
				id: creatId(listTransactions) + 1,
				description: `${description}`,
				type: `${type}`,
				value: Number(value),
			};
			handleListTransactions(transaction);
		}
		setDescription("");
		setValue("");
	};
	return (
		<form onSubmit={captureForm}>
			<h2>Descrição</h2>
			<input
				className='form-input-discription'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				type='text'
				placeholder='Digite aqui sua descrição'
			/>
			<span>Ex: Compra de roupas</span>
			<div className='form-div-titles'>
				<h2>Valor</h2>
				<h2>Tipo de valor</h2>
			</div>
			<div className='form-div-inputs'>
				<input
					className='form-value'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					type='text'
					placeholder='1                     R$'
				/>
				<select
					value={type}
					onChange={(e) => setType(e.target.value)}
					name='TipoDeValor'
					id='TipoDeValor'>
					<option value='Entrada'>Entrada</option>
					<option value='Despesa'>Despesa</option>
				</select>
			</div>
			<Button className='form-button' type='submit'>
				Inserir Valor
			</Button>
		</form>
	);
}
export default Form;
