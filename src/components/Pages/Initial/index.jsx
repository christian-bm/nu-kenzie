import Button from "../../Button";
import nuKenzieWhite from "../../../img/nuKenzieWhite.png";
import "./style.css";

function Initial({ handleIsLoggedin }) {
	return (
		<main className='main-initial'>
			<figure>
				<img src={nuKenzieWhite} alt='Logo Nu Kenzie' />
			</figure>
			<h1>Centralize o controle das suas finanças</h1>
			<span>de forma rápida e segura</span>
			<Button className={"button-initial"} onClick={handleIsLoggedin}>
				Iniciar
			</Button>
		</main>
	);
}

export default Initial;
