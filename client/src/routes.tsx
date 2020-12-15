import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'; 
import Canyon from './pages/Canyon';
import ConsultCEP from './pages/ConsultCEP';

import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/landing" component={Landing} exact/>
            <Route path="/canyon" component={Canyon} exact/>
            <Route path="/search"  component={ConsultCEP} exact/>
        </BrowserRouter>
    );
}

export default Routes;