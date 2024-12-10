import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { getExercises } from '../services/exerciseService';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [userCount, setUserCount] = useState(0);
    const [exerciseCount, setExerciseCount] = useState(0);
    const [exercises, setExercises] = useState<{ id: number; name: string; description: string; weight: number; repetitions: number; muscle: string }[]>([]);

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
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {exercises.map((exercise) => (
                    <li key={exercise.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #333', borderRadius: '4px' }}>
                        <strong>{exercise.name}</strong>: {exercise.description}<br />
                        <strong>Peso:</strong> {exercise.weight} kg<br />
                        <strong>Repeticiones:</strong> {exercise.repetitions}<br />
                        <strong>Músculo Trabajado:</strong> {exercise.muscle}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
