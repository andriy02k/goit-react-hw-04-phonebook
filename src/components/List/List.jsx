import React from 'react'
import { Lists } from './List.styled'

const List = ({contacts, deleteContact}) => {
  return (
    <Lists>
          {contacts.map(item => (
              <li key={item.id}>
                  {item.name}: {item.number}
                  <button onClick={() => deleteContact(item.id)}>Delete</button>
              </li>
          ))}
    </Lists>
  )
}

export default List