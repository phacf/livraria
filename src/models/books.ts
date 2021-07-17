import {DataTypes as type} from 'sequelize';
import {sequelize} from './db'


        
       export const books = sequelize.define('livros',{            
            titulo:{
                type: type.STRING,
                allowNull: false
            },
            categoria: {
                type: type.STRING,
                allowNull: false
            },
            no_paginas:{
                type: type.INTEGER,
                allowNull: true                
            }
        });

        
