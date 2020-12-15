import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import './styles.css';

const clientID = '512760901804-db81482q2tvao9avs8ff5tv6l88rhgmg.apps.googleusercontent.com';

function Logout() {
    let history = useHistory();

    const onLogoutSuccess = () => {
        alert('Logout made successfully ☺☺');
        history.push("/");

    };

    const onFailure = () => {
        console.log('Handle failure cases');
    }

    const { signOut } = useGoogleLogout({
        clientId: clientID,
        onLogoutSuccess,
        onFailure,
    });

    return(
        <button onClick={signOut} className="button-logout">
            <img src="https://img-authors.flaticon.com/google.jpg" alt="Google Login" className="icon"></img>
            <span className="buttonText">Sair</span>
        </button>
    );
}

export default Logout;