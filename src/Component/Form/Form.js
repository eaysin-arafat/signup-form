import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

const TextInput = (props) => {
  return(
  <div className='form-group'>
    <label htmlFor='props.name'>{props.label}</label>
    <input
    className='form-control'
    type={props.type}
    name={props.name}
    id={props.name}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    />
  </div>)
}

TextInput.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
  type: 'text',
  label: ''

}




class SplitForm extends React.Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    e.target.reset()
    this.setState({
      name: '',
      email: '',
      password: ''
    })

  }

  render() {
    const { name, email, password } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextInput
          name='name'
          label='Enter Name'
          placeholder='Eaysin Arafat'
          value={name}
          onChange={this.handleChange}
          />
          <TextInput
          name='email'
          label='Enter Email'
          placeholder='eaysin@gmai.com'
          value={email}
          onChange={this.handleChange}
          />
          <TextInput
          name='password'
          label='Enter Password'
          placeholder='********'
          value={password}
          onChange={this.handleChange}
          />
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
