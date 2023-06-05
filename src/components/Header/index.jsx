import logo from "../../assets/Nukenzie.svg"
import { StyleHeaderContainer } from "./styled.js"
export function Header() {

    return (
        <StyleHeaderContainer>
            <div className="subContainer">
                <img src={logo} alt="Logo escrita Nu kenzie" />
            </div>
        </StyleHeaderContainer>
    )
}