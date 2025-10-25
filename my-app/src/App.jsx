import React from "react"
import Counter from "./components/Counter/Counter"
import colorcickerdata from "./colorpicker.json"
import ColorPicker from "./components/colorPicker/ColorPicker"

class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

function App() {

  return (
    <>
      <Greeting name="Timon!" />
      <Counter initialValue={0} />
      <ColorPicker data={colorcickerdata} />
    </>
  )
}

export default App
