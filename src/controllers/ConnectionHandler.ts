import { Connection, createConnection, getConnectionManager } from "typeorm";

export default async (): Promise<Connection> => {
    const openedConnections = getConnectionManager();
    if (openedConnections.connections.length > 0) return openedConnections.get("default");
    else return await createConnection();
}