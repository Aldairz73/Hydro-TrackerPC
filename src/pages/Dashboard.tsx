import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { getExercises } from '../services/exerciseService';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [userCount, setUserCount] = useState(0);
    const [exerciseCount, setExerciseCount] = useState(0);
    const [exercises, setExercises] = useState<{ id: number; name: string; description: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            const exercises = await getExercises();
            setUserCount(users.length);
            setExerciseCount(exercises.length);
            setExercises(exercises);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Usuarios Registrados: {userCount}</p>
            <p>Ejercicios Disponibles: {exerciseCount}</p>
            <Link to="/add-exercise">
                <button>Añadir Nuevo Ejercicio</button>
            </Link>
            <h3>Lista de Ejercicios</h3>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <strong>{exercise.name}</strong>: {exercise.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
