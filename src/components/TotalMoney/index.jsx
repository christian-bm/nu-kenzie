import './style.css'

function TotalMoney({listTransactions}) {
    return(
        <div className="totalMoney">
            <h2 className="totalMoney-text">Valor Total:</h2>
            <span className="totalMoney-total">R$ {listTransactions.reduce((acc,transaction) => acc += transaction.value,0)}</span>
        </div>
    )
}
export default TotalMoney;
