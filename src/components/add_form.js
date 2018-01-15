import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { addItem } from '../actions';
import { connect } from 'react-redux';

class AddForm extends Component {
    handleAddItem (values) {
        this.props.addItem(values).then( () => {
            this.props.history.push('/');
        });
    }
    renderInput ({label, input, meta: { touched, error }}) {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input}  className="form-control"/>
                <p className="text-danger">{touched && error}</p>
            </div>
        )
    }
    render () {
        return (
            <div>
                <div className="row my-4 justify-content-end">
                    <Link className="btn btn-outline-primary" to="/">
                        Back
                    </Link>
                </div>
                <h1 className="text-center">Add to do item</h1>
                <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
                    <div className="form-group">
                        <Field name="title" label="Title" component={this.renderInput} />
                        <Field name="details" label="Details" component={this.renderInput} />
                        <button className="btn btn-outline-success mx-2">Add To Do Item</button>
                        <button onClick={this.props.reset} type="button" className="btn btn-outline-danger">Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

function validate (values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.details) {
        errors.details = 'Please enter details of the to do item.';
    }
    return errors;
}

AddForm = reduxForm({
    form: 'add-item',
    validate: validate
})(AddForm);

export default connect(null, { addItem })(AddForm);