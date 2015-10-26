/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        /*esto es un objeto en javascript*/
        nombre: {
            type: 'string',
            unique: true,
            required: true

        },
        tipo: {
            type: 'string',
            enum: ['agua', 'fuego', 'psiquico', 'hierba', 'electrico', 'bicho']
        },
        habilidadEspecial: {
            type: 'string',
            unique: true,
            defaultsTo: 'ninguno'
        },
        numeroPokemon: {
            type: 'integer',
            required:true
        },
        fechaVista: {
            type:'date'
        }

    }
};

/*
nombre 
tipo 
habilidad especiall
numeroPokemon
fechaVist
*/
//esta es un alinea de prueba