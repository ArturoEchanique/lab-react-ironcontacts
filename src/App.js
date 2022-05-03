import logo from './logo.svg';
import contacts from "./contacts.json";
import { useState } from 'react'
import './App.css';

const newContacts = contacts.splice(0, 5)

function App() {

  const [contactList, setContactList] = useState(newContacts)

  // const get5Contacts = () => {
  //   const newContacts = contactList.filter((elm, idx) => idx < 5)
  //   setContactList(newContacts)
  // }

    const addContact = () => {
    const otherContacts = contacts.filter(contact => !contactList.includes(contact))
    const newContacts = [...contactList]
    newContacts.push(otherContacts[Math.floor(Math.random() * otherContacts.length)])
    setContactList(newContacts)
  }

  const sortByName = () => {
    const sortedContacts = [...contactList]
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name))
    setContactList(sortedContacts)
  }

  const sortByPopularity = () => {
    const sortedContacts = [...contactList]
    sortedContacts.sort((a, b) => b.popularity-a.popularity)
    setContactList(sortedContacts)
  }

  const removeContact = (id) => {
    let contactsCopy = [...contactList]
    contactsCopy = contactList.filter(contact => contact.id != id)                                                  // no retorna nuevo array
    setContactList(contactsCopy)
  }

  // const addContact = () => {
  //   const otherContacts = contacts.filter(contact => !contactList.includes(contact))
  //   const newContacts = [...contactList]
  //   newContacts.push(otherContacts[Math.floor(Math.random() * otherContacts.length)])
  //   setContactList(newContacts)
  // }



  return (
    <div className="App">
      <button onClick={addContact}>Añadir contacto random</button>
      <button onClick={sortByName}>Ordenar alfabéticamente</button>
      <button onClick={sortByPopularity}>Ordenar por popularidad</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emy</th>
          <th>Actions</th>
        </tr>
        {contactList.map(contact =>
          <tr>
            <td><img src={contact?.pictureUrl}></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar && <g-emoji class="g-emoji" alias="trophy" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png">🏆</g-emoji>}</td>
            <td>{contact.wonEmmy && <g-emoji class="g-emoji" alias="trophy" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png">🏆</g-emoji>}</td>
            <td><button onClick={()=>removeContact(contact.id)}>Delete</button></td>
          </tr>)}

      </table>
      <table>

      </table>
    </div>
  );
}

export default App;
