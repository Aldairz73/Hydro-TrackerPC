import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#1f1f1f' }}>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
                <Link to="/register">
                    <button>Registrar Usuario</button>
                </Link>
            </div>
            <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
                {user && (
                    <li>
                        <button
                            onClick={handleLogout}
                            style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '10px' }}
                        >
                            Cerrar Sesión
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
