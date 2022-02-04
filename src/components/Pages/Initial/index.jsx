import Button from "../../Button";

function Initial({handleIsLoggedin}) {
    return(
        <main>
            <img src="../../../public/nuKenzieWhite" alt="Logo Nu Kenzie" />
            <h1>Centralize o controle das suas finanças</h1>
            <span>de forma rápida e segura</span>
            <Button onClick={handleIsLoggedin}>Iniciar</Button>
        </main>
    )
}

export default Initial;
