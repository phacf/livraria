import { DataTypes, Sequelize } from "sequelize";

// CONFIG
import { database_config } from "../util/config"

const{ 
    
    database_host, 
    database_name, 
    database_password, 
    database_user } = database_config

const sequelize = new Sequelize(''+ database_name, '' + database_user, database_password,{
    host: database_host,
    dialect: 'mysql'
});

export const database_connect = async () => {
    try{
        await sequelize.authenticate()
        console.log(`Connected to database: ${database_name} @ ${database_host}`)
    }catch(error: any){
        console.log(`Database connection error: ${error}`);
    }
}