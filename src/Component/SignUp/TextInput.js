import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

const TextInput = (props) =>  (
        <div className='form-group'>
            <label htmlFor='props.name'>{props.label}</label>
            <input
            className={props.error ? 'form-control is-invalid' : 'form-control'}
            type={props.type}
            name={props.name}
            id={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
            {props.error && <div className='invalid-feedback'>{props.error}</div>}
        </div>
    )

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default TextInput