import Button from "../../Button";
import nuKenzieWhite from "../../../img/nuKenzieWhite.png";
import "./style.css";
import backInitial from "../../../img/backInitial.png";
import Imagem from "../../Imagem";

function Initial({ handleIsLoggedin }) {
	return (
		<main className='main-initial'>
			<section className="section-initial">
				<div>
					<Imagem className={"logo-initial"} src={nuKenzieWhite} alt={"Logo Nu Kenzie"} />
					<h1>Centralize o controle das suas finanças</h1>
					<span>de forma rápida e segura</span>
					<Button
						className={"button-initial"}
						onClick={handleIsLoggedin}>
						Iniciar
					</Button>
				</div>
				<Imagem
					className={"img-initial"}
					src={backInitial}
					alt={"infeite tela inicial"}
				/>
			</section>
		</main>
	);
}

export default Initial;
