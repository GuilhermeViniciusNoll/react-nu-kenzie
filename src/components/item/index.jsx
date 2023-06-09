import { StyleLiContainer } from "./styled.js"

export function Item({ item, launchList, setLauchList }) {

    const deleteItem = () => {
        const result = confirm("Deseja mesmo excluir esse lançamento ?")
        if (result) {
            const id = item.id
            const newList = launchList.filter((lauch) => lauch.id != id)
            setLauchList(newList)
        }
    }

    const value = item.value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

    return (
        <StyleLiContainer key={item.id} type={item.type} >
            <div className="containerItem">
                <h2>{item.description}</h2>
                <p>{item.type}</p>
            </div>
            <div>
                <p>{value}</p>
                <button onClick={deleteItem}>Excluir</button>
            </div>
        </StyleLiContainer>
    )
}