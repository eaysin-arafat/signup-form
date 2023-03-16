import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types'


const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
};


class SignUp extends React.Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState ({
            values: {
                ...this.state.values,
            [event.target.name] : event.target.value
            }
        })
    }

    handlAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const {isValid, errors} = this.validate()

        if(isValid) {
        this.props.createUser(this.state.values)
        event.target.reset();
        this.setState({values: initValues, agreement: false, errors: {}})
        } else {
            this.setState({errors})
        }
    }

    validate = () => {
        const errors = {}
        const {values: {name, email, password, gender, birthDate}} = this.state

        if(!name) {
            errors.name = 'Please Provide Your Name'
        }
        if(!email) {
            errors.email = 'Please Provide Your Email'
        }
        if(!password) {
            errors.password = 'Please Provide Your Password'
        }
        if(!birthDate) {
            errors.birthDate = 'Please Provide Your Birthdate'
        }
        
        if(!gender) {
            errors.gender = 'Please Select Your Gender'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    render() {
        return(
            <div>
                <SignUpForm
                values={this.state.values}
                agreement={this.state.agreement}
                errors={this.state.errors}
                handleChange={this.handleChange}
                handlAgreement={this.handlAgreement}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

SignUp.prototypes = {
    createUser: PropTypes.func.isRequired
}

export default SignUp
