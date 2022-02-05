import Button from "../Button";
import Imagem from "../Imagem";
import "./style.css";
import NuKenzieBlack from "../../img/nuKenzieBlack.jpg";

function Header({ handleIsLoggedin }) {
	return (
		<header>
			<Imagem
				className={"header-logo"}
				src={NuKenzieBlack}
				alt={"Logo Nu Kenzie"}
			/>
			<Button onClick={handleIsLoggedin} className={"header-button"}>
				Inicio
			</Button>
		</header>
	);
}
export default Header;
