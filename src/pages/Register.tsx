import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('El nombre es obligatorio').min(3, 'Debe tener al menos 3 caracteres'),
    email: yup.string().email('Correo electrónico inválido').required('El correo es obligatorio'),
    password: yup.string().required('La contraseña es obligatoria').min(6, 'Debe tener al menos 6 caracteres'),
});

type RegisterFormValues = {
    name: string;
    email: string;
    password: string;
};

const Register: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: RegisterFormValues) => {
        console.log('Datos enviados:', data);
    };

    return (
        <div className="form-container">
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        aria-describedby="name-error"
                        placeholder="Escribe tu nombre"
                    />
                    {errors.name && (
                        <p id="name-error" className="error-message">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="input-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        aria-describedby="email-error"
                        placeholder="Escribe tu correo"
                    />
                    {errors.email && (
                        <p id="email-error" className="error-message">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="input-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password')}
                        aria-describedby="password-error"
                        placeholder="Crea una contraseña"
                    />
                    {errors.password && (
                        <p id="password-error" className="error-message">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button type="submit" className="submit-button">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
