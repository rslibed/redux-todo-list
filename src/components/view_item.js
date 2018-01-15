import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getSingleItem, toggleDeleteModal, deleteSingleItem } from '../actions';
import '../assets/css/delete-modal.css';

class ViewItem extends Component {
    componentDidMount () {
        this.props.getSingleItem(this.props.match.params.id);
    }
    handleDeleteItem (values) {
        this.props.deleteSingleItem(this.props.match.params.id).then ( () => {
            this.props.history.push('/');
        });
    }
    render (props) {
        console.log("View item: props: ", this.props);
        if (!this.props.single) {
            return null
        }
        return(
            <div>
                <div style={this.props.deleteValue} className="delete-modal-container row">
                    <div className="delete-modal col-xs-4 mx-auto">
                        <h3>Are you sure you want to delete this item?</h3>
                        <hr className="col-xs-10 mx-auto my-3"/>
                        <h4>To-do item: </h4><span>{this.props.single.title}</span>
                        <h5>Details: </h5><span>{this.props.single.details}</span>
                        <form onSubmit={ this.props.handleSubmit(this.handleDeleteItem.bind(this)) }>
                        <button className="btn btn-outline-danger mr-2">Delete Item</button>
                        <button onClick={
                            () => { this.props.toggleDeleteModal(this.props.deleteValue.display) }} className="btn btn-outline-primary">Go back</button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="row my-4 justify-content-end">
                        <Link className="btn btn-outline-primary" to="/">
                            Back
                        </Link>
                    </div>
                    <h3 className="text-center">{this.props.single.title}</h3>
                    <p>Details: {this.props.single.details}</p>
                    <button onClick={ 
                        () => { this.props.toggleDeleteModal(this.props.deleteValue.display)}} className="btn btn-outline-danger">Delete Item</button>
                </div>
            </div>
        );
    }
}

ViewItem = reduxForm({
   form: 'delete-item' 
})(ViewItem);

function mapStateToProps (state) {
    return {
        single: state.todo.single,
        deleteValue: state.todo.deleteDisplayValue
    }
}

export default connect(mapStateToProps, { getSingleItem, toggleDeleteModal, deleteSingleItem })(ViewItem);