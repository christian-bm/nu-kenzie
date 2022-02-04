import Button from "../Button";

function Header({handleIsLoggedin}) {
	return (
		<header>
			<figure className='header-logo'>
				<img src = "../../../public/nuKenzieBlack.jpg" alt='Logo Nu Kenzie'/>
			</figure>
			<Button onClick={handleIsLoggedin} className='header-button'>Inicio</Button>
		</header>
	);
}
export default Header;
