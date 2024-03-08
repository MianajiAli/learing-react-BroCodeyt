import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./plugins/Button/Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"
import ColorPicker from "./ColorPicker"
import CarInput from "./CarInput"
import ToDoList from "./ToDoList"
import "./index.css"
function App() {
  const fruits = [
    { id: 1, name: "banana", calories: 95 },
    { id: 2, name: "apple", calories: 45 },
    { id: 3, name: "orange", calories: 100 },
    { id: 4, name: "painapple", calories: 120 }
  ]

  return (

    <>
      <Header />
      <Card />
      <ToDoList/>
      <UserGreeting isLoggedIn={true} username="ali" />
      <ColorPicker />
      <CarInput />
      <List items={fruits} category="id" />
      <Student name="Sponge Bob" age={45} isStudent={true} />
      <Button />
      <Footer />
    </>
  )
}

export default App
