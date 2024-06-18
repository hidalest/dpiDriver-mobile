export interface TrainingPageProps {
    headerText: string;
    searchTermPlaceholder: string;
    noTrainingsText: string;
    emoji: string;
    trainings: Training[]
}

export interface Training {
    id: string;
    name: string;
    state: string;
    description: string;
    duration: string;
    videoUrl: string;
}

