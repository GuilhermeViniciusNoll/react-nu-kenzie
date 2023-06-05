import { StyleDivContainer } from "./style.js"

export function ContainerValueTotal({ launchList }) {

    const listEntry = launchList.filter((lauch) => lauch.type == "Entrada")
    const listEntryValue = listEntry.reduce((value, item) => parseFloat(value) + parseFloat(item.value), 0)
    const listExit = launchList.filter((lauch) => lauch.type == "Despesas")
    const listExitValue = listExit.reduce((value, item) => parseFloat(value) + parseFloat(item.value), 0)
    const totalValue = listEntryValue - listExitValue

    return (
        <StyleDivContainer>
            <div>
                <h3>Valor Total:</h3>
                <h3 className="value" >{totalValue.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</h3>
            </div>
            <p>O valor se refere ao saldo.</p>
        </StyleDivContainer>
    )
}