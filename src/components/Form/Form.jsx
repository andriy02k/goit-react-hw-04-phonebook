import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import css from './Form.module.css'

const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeNumber = ({ target: { value } }) => setNumber(value);

  const adContact = (e) => {
    e.preventDefault();

    const newContact = { id: nanoid(), name, number };
    addContact(newContact);
    setName('');
    setNumber('');
  }
  return (
    <form className={css.form} onSubmit={adContact}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" value={name} onChange={handleChangeName} required />
      </label>
      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" value={number} onChange={handleChangeNumber} required />
      </label>
      <button className={css.btn} type="submit">Add contact</button>
    </form>
  )
}

export default Form