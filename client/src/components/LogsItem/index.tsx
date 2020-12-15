import React from 'react';

import './styles.css';

export interface Log {
    
    name: string;
    image: string;
    email: string;
    id: number; 
    created_at: Date;   
}

interface LogItemProps {
    log: Log;
}

const LogItem: React.FC<LogItemProps> = ({ log }) => {

    return(
        <article className="log-item">
            <header>
                <img src={log.image} alt={log.name} />
                <div className="itens-log">
                    <div>
                        <strong>Nome:</strong>
                        <strong> {log.name} </strong>
                    </div>
                    <div>
                        <strong>Email:</strong>
                        <span> {log.email} </span>
                    </div>
                    <div>
                        <strong>Horário:</strong>
                        <span> {log.created_at} </span>
                    </div>

                </div>
            </header>
        </article>
    )
}

export default LogItem;