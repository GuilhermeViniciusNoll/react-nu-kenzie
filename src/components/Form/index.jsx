import { v4 as uuidv4 } from "uuid";
import { Select } from "../Select/index.jsx";
import { Inputs } from "../Inputs/index.jsx";
import { StyleFormContainer } from "./styled.js"

export function Form({ formValue, setFormValue, action }) {

    const setID = () => {
        setFormValue({ ...formValue, id: uuidv4() })
    }

    return (
        <StyleFormContainer onSubmit={(event) => { action(event) }} action="">
            <Inputs setFormValue={setFormValue} formValue={formValue} />
            <Select setFormValue={setFormValue} formValue={formValue} />
            <button onClick={setID} type="submit">Inserir Valor</button>
        </StyleFormContainer >
    )
}