import { useState } from "react"
const ColorPicker = () => {
    let [colorPick, setColorPick] = useState("#000");
    const changeColor= (e) =>{
    setColorPick(e.target.value)
    }
    return (
        <>
            <input type="color"   onChange={(e)=>changeColor(e)}/>
            <button style={{ backgroundColor:  colorPick}}>{colorPick}</button>
        </>

    )
}
export default ColorPicker