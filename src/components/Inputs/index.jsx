import { StyleDivContainer } from "./styled.js"


export function Inputs({ setFormValue, formValue }) {

    return (
        <>
            <StyleDivContainer>
                <label htmlFor="description">Descrição</label>
                <input onChange={(e) => { setFormValue({ ...formValue, description: e.target.value }) }} value={formValue.description} required placeholder="Digite aqui sua descrição" type="text" name="description" id="description" />
                <p>Ex: Compra de roupas</p>
            </StyleDivContainer>
            <StyleDivContainer>
                <label htmlFor="value">Valor (R$)</label>
                <input onChange={(e) => { setFormValue({ ...formValue, value: parseFloat(e.target.value) }) }} value={formValue.value} step="0.01" min="0.01" required placeholder="1" type="number" name="value" id="value" />
            </StyleDivContainer>
        </>
    )
}