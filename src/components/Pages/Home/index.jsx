import Header from "../../Header";
import Main from "../../Main";

function Home({ handleIsLoggedin, listTransactions, handleListTransactions }) {
	return (
		<div>
			<Header handleIsLoggedin={handleIsLoggedin}/>
			<Main listTransactions={listTransactions} handleListTransactions={handleListTransactions}/>
		</div>
	);
}

export default Home;
