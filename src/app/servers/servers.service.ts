import { EventEmitter } from '@angular/core'
import { Server, ServerStatus, DEFAULT_SERVER_LIST } from './servers.model'

export class ServersService {
    
    // array of servers
    private servers: Server[] = DEFAULT_SERVER_LIST
    
    // event emmiter for addition of a new server
    public onAddServer: EventEmitter<Server[]>

    /**
     * Constructor
     */
    constructor() {
        this.onAddServer = new EventEmitter<Server[]>()
    }

    /**
     * Gets the array of servers
     * @returns array of severs
     */
    public getServers(): Server[] {
        return this.servers
    }

    /**
     * Gets a server with the given ID
     * @param id the server ID to get
     * @returns the server with the given ID
     */
    public getServer(id: number): Server | null {
        const server = this.servers.find(
            (s) => {
                return s.id === id
            }
        )
        return server
    }

    /**
     * Updates a server at a given ID
     * @param id the ID of the server to update
     * @param serverInfo the new server info
     */
    public updateServer(id: number, serverInfo: { name: string, status: ServerStatus }): void {
        const server: Server = this.servers.find(
            (s) => {
                return s.id === id
            }
        )
        if (server) {
            server.name = serverInfo.name
            server.status = serverInfo.status
        }
    }

    /**
     * Adds a new server to the array of servers
     * @param newServer the new server to add
     */
    public addServer(newServer: Server): void {
        newServer.id = this.getHighestID() + 1
        this.servers.push(newServer)
        this.onAddServer.emit(this.servers)
    }

    /**
     * Gets the highest ID in the array of servers
     * @returns the highest ID
     */
    private getHighestID(): number {
        let highestID: number = -1
        for (let server of this.servers) {
            if (server.id > highestID) {
                highestID = server.id
            }
        }
        return highestID
    }
}
