export const login = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        // Simula una autenticación
        setTimeout(() => {
            if (
                (username === 'Aldair' && password === '1234') ||
                (username === 'Alessio' && password === '4321')
            ) {
                resolve(true);
            } else {
                reject('Usuario o contraseña incorrectos');
            }
        }, 1000);
    });
};
