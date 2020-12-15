import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.css';

import Login from '../../components/Login';

function Dashboard() {
    return(
        <div id="page-dashboard" className="container">
            <Header />
            <Link to="/landing">
                <Login />
            </Link>
        </div>
    );
}

export default Dashboard;