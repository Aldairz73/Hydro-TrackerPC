import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addExercise } from '../services/exerciseService';

const schema = yup.object({
    name: yup.string().required('El nombre del ejercicio es obligatorio'),
    description: yup.string().required('La descripción es obligatoria'),
    weight: yup.number().required('El peso es obligatorio').positive('El peso debe ser positivo'),
    repetitions: yup.number().required('Las repeticiones son obligatorias').positive('Las repeticiones deben ser positivas'),
    muscle: yup.string().required('El músculo trabajado es obligatorio'),
});

type ExerciseFormValues = {
    name: string;
    description: string;
    weight: number;
    repetitions: number;
    muscle: string;
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
        <div className="form-container">
            <h2>Añadir Ejercicio</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label>Nombre:</label>
                    <input type="text" {...register('name')} />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>
                <div className="input-group">
                    <label>Descripción:</label>
                    <textarea {...register('description')} />
                    {errors.description && <p className="error-message">{errors.description.message}</p>}
                </div>
                <div className="input-group">
                    <label>Peso (kg):</label>
                    <input type="number" {...register('weight')} />
                    {errors.weight && <p className="error-message">{errors.weight.message}</p>}
                </div>
                <div className="input-group">
                    <label>Repeticiones:</label>
                    <input type="number" {...register('repetitions')} />
                    {errors.repetitions && <p className="error-message">{errors.repetitions.message}</p>}
                </div>
                <div className="input-group">
                    <label>Músculo Trabajado:</label>
                    <input type="text" {...register('muscle')} />
                    {errors.muscle && <p className="error-message">{errors.muscle.message}</p>}
                </div>
                <button type="submit">Añadir</button>
            </form>
        </div>
    );
};

export default AddExercise;
