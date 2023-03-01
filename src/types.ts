export interface IUser {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
}

export type Session = {
    id: number,
    name: string,
    topics: Topic[],
}

export type Topic = {
    id: number,
    name: string,
    votes: Vote[],
}

export type Vote = {
    id: number,
    user: string,
    value: string,
}