import React, { useEffect, useState } from 'react';
import { getExercises } from '../services/exerciseService';

const Exercises: React.FC = () => {
    const [exercises, setExercises] = useState<{ id: number; name: string; description: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExercises = async () => {
            const fetchedExercises = await getExercises();
            setExercises(fetchedExercises);
            setLoading(false);
        };
        fetchExercises();
    }, []);

    if (loading) {
        return <p>Cargando ejercicios...</p>;
    }

    return (
        <div>
            <h2>Ejercicios Disponibles</h2>
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

export default Exercises;
