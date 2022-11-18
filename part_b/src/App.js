import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name:'Arto Hellas', number:'123-456-7899'}
  ]) 
  const [newInfo, setNewInfo] = useState({
    name:"", number:""
  })

  const addInfo = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    // check to see if person already exists in phonebook
    const found = persons.find(x => x.name === newInfo.name)
    if (typeof(found) !== "undefined"){
      window.alert(`${newInfo.name} is already added to phonebook`)
    }
    else{
      const newPerson = {
        name: newInfo.name,
        number: newInfo.number
      }
    
      setPersons(persons.concat(newPerson))
      setNewInfo({
        name:'', number:''
      })
      console.log("persons", persons.concat(newPerson))
    }
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)

    var newName = newInfo.name
    var newNumber = newInfo.number

    if (event.target.id === "name"){
      newName = event.target.value
    }
    else {
      newNumber = event.target.value
    }

    const newText = {
      name: newName, number: newNumber
    }

    setNewInfo(newText)
  }

  const ShowInfo = ({ person }) => {
    return(
      <>
        {person.name} {person.number} <br></br>
      </>
      
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>name: <input id="name" value={newInfo.name} onChange={handleInputChange} placeholder="Enter new name" /></div>
        <div>number: <input id="number" value={newInfo.number} onChange={handleInputChange} placeholder="Enter number" /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(x => 
        <ShowInfo key={x.name} person={x} />  
      )}
    </div>
  )
}

export default App