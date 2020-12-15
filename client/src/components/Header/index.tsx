import React from 'react';

import './styles.css';

function Header(){
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <div>
                    <img 
                        src="https://portal.ifba.edu.br/dgcom/documentos-e-manuais-arquivos/manuais/ifba_marca_vertical-01.png"
                        alt="Logo Ifba"
                    />
                </div>
            </div>

        </header>
    )
}

export default Header;