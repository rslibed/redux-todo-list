import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    render () {
        return(
            <div>
                <div className="row my-4 justify-content-end">
                    <div className="col-2">
                        <Link to="/add-item" className="btn btn-outline-primary">Add To Do Item</Link>
                    </div>
                </div>
                <h1>To Do List</h1>
            </div>
        )
    }
}

export default List;