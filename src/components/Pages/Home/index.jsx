import Header from "../../Header";
import Main from "../../Main";

function Home({ handleIsLoggedin, listTransactions, handleListTransactions, removeTransaction }) {
	return (
		<>
			<Header handleIsLoggedin={handleIsLoggedin}/>
			<Main 
				listTransactions={listTransactions} 
				handleListTransactions={handleListTransactions}
				removeTransaction={removeTransaction}			
			/>
		</>
	);
}

export default Home;