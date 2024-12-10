interface Exercise {
    id: number;
    name: string;
    description: string;
    weight: number;
    repetitions: number;
    muscle: string;
}

let exercises: Exercise[] = [
    { id: 1, name: 'Sentadilla', description: 'Ejercicio para fortalecer las piernas y glúteos.', weight: 50, repetitions: 10, muscle: 'Piernas' },
    { id: 2, name: 'Press de banca', description: 'Ejercicio para el desarrollo del pecho.', weight: 70, repetitions: 8, muscle: 'Pecho' },
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
