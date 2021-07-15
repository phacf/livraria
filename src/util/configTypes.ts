export interface ServerType {
    server_port: number;
    server_host: string;
}


export interface DatabaseType {
    database_user: string;
    database_password: string;
    database_name: string
    database_dialect: string
    database_host: string
}