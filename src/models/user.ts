import {DataTypes as type} from 'sequelize';
import {sequelize} from './db'

export const User = sequelize.define('usoarios',{
    nome: {
        type: type.STRING,
    },
    telefone:{
        type: type.INTEGER
    }
    
})