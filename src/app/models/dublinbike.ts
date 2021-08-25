export interface Position {
    lat: number;
    lng: number;
}

export interface Dublinbike {
    number: number;
    contractName: string;
    name: string;
    address: string;
    position: Position;
}
