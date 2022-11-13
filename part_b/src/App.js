import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ {name:'Arto Hellas'} ]) 
  const [newName, setNewName] = useState("")

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    console.log("persons", persons.concat(newPerson))
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const ShowName = ({ person }) => {
    return(
      <>
        {person.name} <br></br>
      </>
      
    )
  }

  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInputChange} placeholder="Enter new name" />
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <h2>
        Numbers
      </h2>
      {persons.map(x => 
        <ShowName key={x.name} person={x} />  
      )}
    </div>
  )
}

export default App