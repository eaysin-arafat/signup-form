import React from "react";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'


const SignUpForm = ( {values, agreement, errors, handleChange, handlAgreement, handleSubmit} ) => {

  return (
        <form onSubmit={handleSubmit}>
          <TextInput
          name='name'
          label='Name'
          placeholder='Eaysin Arafat'
          value={values.name} 
          error={errors.name}
          id={values.name} 
          onChange={handleChange}
          />
          <TextInput
          name='email' 
          type='email'
          id={values.name} 
          label='Enter Email'
          placeholder='enter@gmail.com'
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          />
          <TextInput
          name='password'
          type='password'
          id={values.name} 
          label='Enter Password'
          placeholder='********'
          value={values.password}
          error={errors.password}
          onChange={handleChange}
          />
          <TextInput
          name='birthDate'
          type='date' 
          id={values.name} 
          label='Enter Birthdate'
          error={errors.birthDate}
          value={values.birthDate}
          onChange={handleChange}
          />
          <div className="form-group">
          <RadioInput 
          className='form-group'
          value="Male"
          onChange={handleChange}
          error={errors.gender}
          />
          <RadioInput 
          className='form-group'
          value="Female"
          onChange={handleChange}
          error={errors.gender}
          />
          <RadioInput 
          className='form-group'
          value="Others"
          onChange={handleChange}
          error={errors.gender}
          />
          </div>
          <div className="form-group">
            <label>
                <input
                className="form-group"
                type='checkbox'
                name='agreement'
                checked={agreement}
                onChange={handlAgreement}
                />
                I Agree
            </label>
          </div>
          <button className="btn btn-primary" type="submit" disabled={!agreement} >Create User</button>
        </form>
    )
}

SignUpForm.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handlAgreement: PropTypes.func.isRequired, 
    handleSubmit: PropTypes.func.isRequired
}

export default SignUpForm