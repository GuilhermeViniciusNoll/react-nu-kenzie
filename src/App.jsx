import { useState } from "react"
import { Header } from "./components/Header/index.jsx"
import { SectionList } from "./components/SectionList/index.jsx"
import { ContainerValueTotal } from "./components/ContainerValueTotal/index.jsx"
import { Form } from "./components/Form/index.jsx"
import { ResetStyle } from "./styles/reset.js"
import { GlobalStyle } from "./styles/globalStyle.js"
import { StyleDivContainer } from "./styles/appStyle.js"
import { StyleContainerMain } from "./styles/appStyle.js"

function App() {

  const [launchList, setLauchList] = useState([])
  const [formValue, setFormValue] = useState(
    {
      id: "",
      description: "",
      value: "",
      type: ""
    })

  const addLauchList = (event) => {
    event.preventDefault()
    setLauchList([...launchList, formValue])
    setFormValue({
      id: "",
      description: "",
      value: "",
      type: ""
    })
  }

  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <StyleContainerMain />
      <Header />
      <section className="container">
        <div className="subContainer">
          <StyleDivContainer>
            <Form action={addLauchList} setFormValue={setFormValue} formValue={formValue} />
            {launchList.length != 0 ? <ContainerValueTotal launchList={launchList} /> : <></>}
          </StyleDivContainer>
          <SectionList setLauchList={setLauchList} launchList={launchList} />
        </div>
      </section>
    </>
  )
}

export default App
