import { Component } from 'react'
import { nanoid } from 'nanoid'
import React from 'react'
import css from './Form.module.css'

class Form extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState((prev) => {
      return { ...prev, [name]: value }
    })
  }

  addContact = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };
    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <form className={css.form} onSubmit={this.addContact}>
        <label className={css.label}>
          Name
          <input className={css.input} type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
        </label>
        <label className={css.label}>
          Number
          <input className={css.input} type="tel" name="number" value={this.state.number} onChange={this.handleChange} required />
        </label>
        <button className={css.btn} type="submit">Add contact</button>
      </form>
    )
  }
}

export default Form


