import './style.css'

function TotalMoney({ listTransactions, stateFilter }) {
    return(
        <div className="totalMoney">
            <h2 className="totalMoney-text">Valor Total:</h2>
            <span className="totalMoney-total">R$ {
            stateFilter === "todos" ? listTransactions
            .reduce((acc,transaction) => transaction.type === "Entrada" ? acc += transaction.value : acc -= transaction.value,0)
            :
            stateFilter === "entradas" ? listTransactions
            .filter((transaction) => transaction.type === "Entrada")
            .reduce((acc,transaction) => transaction.type === "Entrada" ? acc += transaction.value : acc -= transaction.value,0)
            :
            stateFilter === "despesas" && listTransactions
            .filter((transaction) => transaction.type === "Despesa")
            .reduce((acc,transaction) => transaction.type === "Entrada" ? acc += transaction.value : acc -= transaction.value,0)
            }</span>
        </div>
    )
}
export default TotalMoney;
