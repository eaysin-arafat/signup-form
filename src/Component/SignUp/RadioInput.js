import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

const RadioInput = (props) => {
    return (
        <div className="form-group">
            <label>
                <input 
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                />
                {props.value}
            </label>
            {props.error && (<div className="invalid-feedback">{props.error}</div>)}
        </div>
    )
}

RadioInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

RadioInput.defaultProps = {
    type: 'radio',
    name: 'gender'
}

export default RadioInput