import { useState } from "react";
import Button from "../Button";

function Form({ handleListTransactions }) {
	const [description, setDescription] = useState("")
	const [value, setValue] = useState("")
	const [type, setType] = useState("Entrada")
	
	const captureForm = (event) => {
		event.preventDefault()
		if(description !== "" && value !== ""){
			const transaction = { description: `${description}`, type: `${type}`, value: Number(value) }
			handleListTransactions(transaction)
		}
		setDescription("")
		setValue("")
	}
	return (
		<form onSubmit={captureForm}>
			<h2>Descrição</h2>
			<input value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Digite aqui sua descrição' />
			<span>Ex: Compra de roupas</span>
			<h2>Valor</h2>
			<h2>Tipo de valor</h2>
			<input value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='1 R$' />
			<select value={type} onChange={(e) => setType(e.target.value)} name='TipoDeValor' id='TipoDeValor'>
				<option value='Entrada'>Entrada</option>
				<option value='Despesa'>Despesa</option>
			</select>
			<Button className="form-button" type='submit'>Inserir Valor</Button>
		</form>
	);
}
export default Form;
