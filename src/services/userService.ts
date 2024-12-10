interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [
    { id: 1, name: 'Aldair', email: 'aldair@example.com' },
    { id: 2, name: 'Sulli', email: 'sulli@example.com' },
];

export const getUsers = (): Promise<User[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(users), 500);
    });
};

export const addUser = (user: Omit<User, 'id'>): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newUser = { id: users.length + 1, ...user };
            users.push(newUser);
            resolve(newUser);
        }, 500);
    });
};
