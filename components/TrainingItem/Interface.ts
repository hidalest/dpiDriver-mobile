import { Training } from "../Trainings/Interface";

export interface TrainingItemProps {
    training: Training;
    descHeader: string;
    lengthText: string;
    acknowledgedText: string;
    acknowledgeTrainingText: string;
    modalQuestionText: string;
    modalConfirmText: string;
    modalDenyText: string;
}