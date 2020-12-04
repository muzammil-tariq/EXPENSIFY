import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/" >Go to Home</Link>
        <Link to="/create" >Go to Add Expense</Link>
        <Link to="/help" >Go to Help</Link>

    </header>


);

export default Header;