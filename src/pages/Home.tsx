import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h2>Bienvenido a Hydro Tracker</h2>
            <Link to="/login">
                <button>Iniciar Sesión</button>
            </Link>
            <Link to="/register">
                <button>Registrarse</button>
            </Link>
        </div>
    );
};

export default Home;
