import {DataTypes as type} from 'sequelize';
import {sequelize} from './db'

export const posts = sequelize.define('postagens',
{
    titulo:{
        type: type.STRING,
    },
    conteudo:{
        type: type.STRING,
    }
}
);
