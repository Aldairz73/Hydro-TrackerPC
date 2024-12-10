export const login = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        // Simula una autenticación (puedes conectar con una API real más tarde)
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                resolve(true);
            } else {
                reject('Usuario o contraseña incorrectos');
            }
        }, 1000);
    });
};
