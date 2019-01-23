import React from 'react';

const CustomerList = (props) => {
    return (
        <ul>
            <h1>Customers</h1>
        {props.list.map((customers) => (
                <li> {customers.firstName} {customers.lastName} </li>
            ))}
        </ul>
    )
}

export default CustomerList;