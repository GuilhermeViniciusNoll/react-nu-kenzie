import { Item } from "../item/index.jsx"
import { StyleUlContainer } from "./styled.js"

export function ListItem({ launchList, setLauchList }) {

    return (
        <StyleUlContainer>
            {launchList.map(item => { return (<Item setLauchList={setLauchList} launchList={launchList} item={item} />) })}
        </StyleUlContainer>
    )
}