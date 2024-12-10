import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';

const Users: React.FC = () => {
    const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) {
        return <p>Cargando usuarios...</p>;
    }

    return (
        <div>
            <h2>Usuarios Registrados</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
