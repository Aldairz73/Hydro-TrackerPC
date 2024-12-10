import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { getExercises } from '../services/exerciseService';

const Dashboard: React.FC = () => {
    const [userCount, setUserCount] = useState(0);
    const [exerciseCount, setExerciseCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            const exercises = await getExercises();
            setUserCount(users.length);
            setExerciseCount(exercises.length);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Usuarios Registrados: {userCount}</p>
            <p>Ejercicios Disponibles: {exerciseCount}</p>
        </div>
    );
};

export default Dashboard;
