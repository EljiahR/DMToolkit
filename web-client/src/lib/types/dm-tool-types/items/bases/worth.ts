export interface Piece {
    name: string;
    abbreviation: string;
    amount: number;
    nextStep: number;
}

export interface Worth {
    cp: Piece;
    sp: Piece;
    ep: Piece;
    gp: Piece;
    pp: Piece;
}

export interface WorthDto {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
}