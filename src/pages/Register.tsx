import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';

const schema = yup.object({
    name: yup.string().required('El nombre es obligatorio').min(3, 'Debe tener al menos 3 caracteres'),
    goal: yup.number().required('La meta diaria es obligatoria').positive('La meta debe ser positiva'),
});

type RegisterFormValues = {
    name: string;
    goal: number;
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
        localStorage.setItem(data.name, JSON.stringify({ goal: data.goal, progress: 0 }));
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
                    label="Meta Diaria (litros)"
                    type="number"
                    fullWidth
                    margin="normal"
                    {...register('goal')}
                    error={!!errors.goal}
                    helperText={errors.goal?.message}
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
