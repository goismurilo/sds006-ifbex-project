import { useGoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

import './styles.css';

const clientID = '512760901804-db81482q2tvao9avs8ff5tv6l88rhgmg.apps.googleusercontent.com';

function Login(){
    let history = useHistory();

    const onSuccess = (res: any) => {
        console.log('[Login Success] currentUser:', res.profileObj);

        api.post('logs', {
            name: res.profileObj.givenName,
            email: res.profileObj.email,
            image: res.profileObj.imageUrl,

        }).then(() => {
            alert('Login realizado com sucesso!');
            history.push('/canyon');
        }).catch(() => {
            alert('Erro no login!');
            history.push('/');
        })
    };

    const onFailure = (res: any) => {
        console.log('[Login Failure] res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure, 
        clientId: clientID,
        isSignedIn: true,
        accessType: 'offline',

    });

    return (
        <button onClick={signIn} className="signed-button">
            <img src="https://img-authors.flaticon.com/google.jpg" alt="Google Logo"></img>
            <span className="buttonText">Login com o Google</span>
            
        </button>
    );
}

export default Login;