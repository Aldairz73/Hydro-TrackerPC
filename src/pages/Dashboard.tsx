import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { getExercises } from '../services/exerciseService';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
    const location = useLocation();
    const { username } = location.state as { username: string };
    const { user } = useAuth();
    const [userCount, setUserCount] = useState(0);
    const [exerciseCount, setExerciseCount] = useState(0);
    const [exercises, setExercises] = useState<{ id: number; name: string; description: string; weight: number; repetitions: number; muscle: string }[]>([]);
    const [goal, setGoal] = useState(0);
    const [progress, setProgress] = useState(0);

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

    useEffect(() => {
        if (user) {
            const userData = JSON.parse(localStorage.getItem(user) || '{}');
            setGoal(userData.goal);
            setProgress(userData.progress);
        }
    }, [user]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem(username) || '{}');
        setGoal(userData.goal);
        setProgress(userData.progress);
    }, [username]);

    const addProgress = (amount: number) => {
        const newProgress = progress + amount;
        setProgress(newProgress);
        localStorage.setItem(username, JSON.stringify({ goal, progress: newProgress }));
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#e0f7fa', borderRadius: '8px' }}>
            <h2>Dashboard</h2>
            <p>Usuarios Registrados: {userCount}</p>
            <p>Ejercicios Disponibles: {exerciseCount}</p>
            <Link to="/add-exercise">
                <button style={{ marginBottom: '20px' }}>Añadir Nuevo Ejercicio</button>
            </Link>
            <h3>Lista de Ejercicios</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {exercises.map((exercise) => (
                    <li key={exercise.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #004d40', borderRadius: '4px' }}>
                        <strong>{exercise.name}</strong>: {exercise.description}<br />
                        <strong>Peso:</strong> {exercise.weight} kg<br />
                        <strong>Repeticiones:</strong> {exercise.repetitions}<br />
                        <strong>Músculo Trabajado:</strong> {exercise.muscle}
                    </li>
                ))}
            </ul>
            <p>Meta Diaria: {goal} litros</p>
            <p>Progreso: {((progress / (goal * 1000)) * 100).toFixed(2)}%</p>
            <p>Fecha: {new Date().toLocaleDateString()}</p>
            <button onClick={() => addProgress(250)} style={{ marginRight: '10px' }}>Agregar 250ml</button>
            <button onClick={() => addProgress(500)}>Agregar 500ml</button>
        </div>
    );
};

export default Dashboard;
