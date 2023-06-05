import { ListEmpty } from "../ListEmpty/index.jsx";
import { ListItem } from "../ListItems/index.jsx";
import { StyleDivContainer } from "./styled.js"


export function SectionList({ launchList, setLauchList }) {

    return (
        <StyleDivContainer>
            <h2>Resumo Financeiro</h2>
            {launchList.length == 0 ? <ListEmpty /> : <ListItem setLauchList={setLauchList} launchList={launchList} />}
        </StyleDivContainer>
    )
}