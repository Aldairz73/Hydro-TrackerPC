import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

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
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Registro de Usuario
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Nombre"
                    fullWidth
                    margin="normal"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label="Correo Electrónico"
                    type="email"
                    fullWidth
                    margin="normal"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="Contraseña"
                    type="password"
                    fullWidth
                    margin="normal"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: 20 }}
                >
                    Registrarse
                </Button>
            </form>
        </Container>
    );
};

export default Register;
