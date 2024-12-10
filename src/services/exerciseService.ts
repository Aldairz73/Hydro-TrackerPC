interface Exercise {
    id: number;
    name: string;
    description: string;
}

let exercises: Exercise[] = [
    { id: 1, name: 'Sentadilla', description: 'Ejercicio para fortalecer las piernas y glúteos.' },
    { id: 2, name: 'Press de banca', description: 'Ejercicio para el desarrollo del pecho.' },
];

export const getExercises = (): Promise<Exercise[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(exercises), 500);
    });
};

export const addExercise = (exercise: Omit<Exercise, 'id'>): Promise<Exercise> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newExercise = { id: exercises.length + 1, ...exercise };
            exercises.push(newExercise);
            resolve(newExercise);
        }, 500);
    });
};
