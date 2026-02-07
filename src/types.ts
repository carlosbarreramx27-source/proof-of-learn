// src/types.ts

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface GameType {
    id: string;
    name: string;
    description: string;
}

export interface GameItem {
    id: string;
    gameTypeId: string;
    name: string;
    description: string;
}

export interface CardItem {
    id: string;
    title: string;
    content: string;
}

export interface PairItem {
    id: string;
    firstCard: CardItem;
    secondCard: CardItem;
}

export interface GasItem {
    id: string;
    amount: number;
}

export interface GameData {
    userId: string;
    gameTypeId: string;
    items: GameItem[];
}

export interface Node {
    id: string;
    name: string;
    value: any;
}

export interface Module {
    id: string;
    name: string;
    description: string;
}

export interface Event {
    id: string;
    name: string;
    date: string;
}

export interface AppData {
    users: User[];
    games: GameData[];
    events: Event[];
}

export interface ChatMessage {
    userId: string;
    message: string;
    timestamp: string;
}