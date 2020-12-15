import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import Logout from '../../components/Logout';
import LogItem, { Log } from '../../components/LogsItem';

import './styles.css';

import api from '../../services/api';

function Landing() {
    const [ logs, setLogs ] = useState([]);

        useEffect(() => {
            async function searchLogs() {
                const res = await api.get('logs');
                console.log(res.data);
                setLogs(res.data);


            }
           // setLogs(res.data);
            searchLogs();
            //console.log(res.json()) 
        }, []);

    
    return(
        <div id="page-dashboard" className="container">
            <Header />
            <Logout />
            <h1 className="title-main">Logs do sistema</h1>

            <main className="page-landing">
                {logs.map((log: Log) =>{
                    
                    return <LogItem key={log.id} log={log}/>;
                })} 
            </main> 
        </div>
    );
}

export default Landing;
