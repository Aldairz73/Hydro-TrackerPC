import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addExercise } from '../services/exerciseService';

const schema = yup.object({
    name: yup.string().required('El nombre del ejercicio es obligatorio'),
    description: yup.string().required('La descripción es obligatoria'),
});

type ExerciseFormValues = {
    name: string;
    description: string;
};

const AddExercise: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ExerciseFormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: ExerciseFormValues) => {
        try {
            await addExercise(data);
            reset();
            console.log('Ejercicio añadido:', data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Añadir Ejercicio</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" {...register('name')} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea {...register('description')} />
                    {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                </div>
                <button type="submit">Añadir</button>
            </form>
        </div>
    );
};

export default AddExercise;
