import React, { useState } from 'react';
import { addUser } from '../services/userService';

const AddUser: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addUser({ name, email });
            setSuccess(true);
            setName('');
            setEmail('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Añadir Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Añadir</button>
            </form>
            {success && <p>Usuario añadido exitosamente</p>}
        </div>
    );
};

export default AddUser;
