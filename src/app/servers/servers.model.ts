export type ServerStatus = 'offline' | 'online'
export interface Server {
    id: number
    name: string
    status: ServerStatus
}

export const DEFAULT_SERVER: Server = {
    id: -1,
    name: '',
    status: 'offline'
}

export const DEFAULT_SERVER_LIST: Server[] = [
    {
        id: 1,
        name: 'Productionserver',
        status: 'online'
    },
    {
        id: 2,
        name: 'Testserver',
        status: 'offline'
    },
    {
        id: 3,
        name: 'Devserver',
        status: 'offline'
    }
];