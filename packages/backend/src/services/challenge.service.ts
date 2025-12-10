export interface Input {
    id: string;
    title: string;
    description: string;
}

export interface Output {
    id: string;
    title: string;
    description: string;
}

export class ChallengeService {
    createChallenge(input: Input) {
        return {
            id: input.id,
            title: input.title,
            description: input.description,
        };
    }
}