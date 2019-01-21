import React from 'react';

function Navbar (props) {
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
        
            <button onClick={() => props.handlePageChange('list')} className={"btn btn-outline-success" +(props.currentPage === 'list' ? 'btn-active disabled':'')}type="button">List Clients</button>
            <button onClick={() => props.handlePageChange('add')} className={"btn btn-outline-success" +(props.currentPage === 'add' ? 'btn-active disabled':'')} type="button">Add New</button>
        </form>
        </nav>
    )

};

export default Navbar;
