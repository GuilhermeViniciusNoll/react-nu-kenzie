import { StyleDivContainer } from "./styled.js"

export function Select({ setFormValue, formValue }) {

    return (
        <StyleDivContainer>
            <label htmlFor="select">Tipo de valor</label>
            <select onChange={(e) => { setFormValue({ ...formValue, type: e.target.value }) }} value={formValue.type} required name="select" id="select">
                <option value="">Selecionar</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesas">Despesas</option>
            </select>
        </StyleDivContainer>
    )
}