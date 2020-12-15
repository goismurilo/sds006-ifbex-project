import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import Input from '../../components/Input';
import Logout from '../../components/Logout';

import api from '../../services/api';
import './styles.css';

function ConsultCEP() {
    
    const [ cep, setCep ] = useState('');
    
    const [ address, setAddress ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ neighborhood, setNeighborhood ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');

    async function handleSearchCEP(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('search',{
            params: {
                cep,
            }
        });

        setStreet(response.data.street);
        setAddress(response.data.address);
        setCity(response.data.city);
        setState(response.data.state);
        setNeighborhood(response.data.neighborhood);


    };

    return(
        <div id="page-dashboard" className="container">

            <Header />
            <Logout />
            <h1 className="title-canyon ">Consultar CEP</h1>
            <main>   
                {<div className="search-cep">
                    <span>{address}</span>
                    <p>{street}</p>
                    <p>{neighborhood}</p>
                    <p>{city}-{state}</p>
                </div>}
                
                <form onSubmit={handleSearchCEP}>
                    <Input
                        name="cep"
                        label="Digite o número do CEP"
                        value={cep}
                        onChange={(e) => { setCep(e.target.value)} }
                    />
                        <button className="button-canyon" type="submit">
                            Pesquisar CEP
                        </button>
                </form>

    
            </main>
        </div>
    );
}

export default ConsultCEP;