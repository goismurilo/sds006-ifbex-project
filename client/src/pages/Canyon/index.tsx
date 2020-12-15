import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Logout from '../../components/Logout';
import './styles.css';

function Canyon(){
    return(
        <div id="page-dashboard" className="container">
            <Header />
            <Logout />
            <h1 className="title-canyon">Seja bem-vindo</h1>
            <h1 className="title-canyon">ao IFBEX</h1>
            <div className="page-canyon">
                <Link to="/landing">
                    <div className="log-pic">
                        <img 
                            src="https://www.flaticon.com/svg/static/icons/svg/28/28822.svg"
                            alt="icone log" />
                    </div>
                </Link>

               <Link to="/search">
                    <div className="cep-pic">
                        <img 
                            src="https://paulacasimiro.adv.br/wp-content/uploads/2015/06/google-location-icon-16.png"
                            alt="icone log" />
                    </div>
               </Link>
            </div>
        </div>
    );
}

export default Canyon;