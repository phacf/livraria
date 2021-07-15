import {DataTypes as type} from 'sequelize';
import {sequelize} from './db'

export class Books { 
    constructor(){
        this.create_table()
    }
    
    private create_table(){
        
        const table = sequelize.define('livros',{            
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

        table.sync({force: true})
    }


}