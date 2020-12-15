import React from 'react';

export interface Address {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;   
}

interface AddressProps {
    address: Address;
}

const AddressItem: React.FC<AddressProps> = ({ address }) => {

    return(
        <article className="teacher-item">
            <header>
                <div>
                    <strong> {address.cep} </strong>
                    <span> {address.city} </span>
                    <span> {address.state} </span>

                </div>
            </header>
            <p>
                {address.street}
            </p>
            <p>
                {address.neighborhood}
            </p>
            <footer>

            </footer>
        </article>
    )
}

export default AddressItem;