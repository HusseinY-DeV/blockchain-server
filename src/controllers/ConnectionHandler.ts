import { Connection, createConnection, getConnectionManager } from "typeorm";

export default async (): Promise<Connection> => {
    const openedConnections = getConnectionManager();
    if (openedConnections.connections.length > 0) return openedConnections.get("default");
    else {
        try {
            const connection: Connection = await createConnection();
            return connection;
        } catch (error) {
            throw new Error("Failed to create a connection with database.");
        }
    }
}