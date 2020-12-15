const fs = require('fs');

let listado = [];

//función de crear
const crear = (descripcion) => {
    cagarDB(); //cargo el archivo JSON data

    let porhacer = {
        descripcion,
        completado: false
    };
    listado.push(porhacer);
    guardarDB();

    return porhacer;
}

//función para actualizar tareas
const actualizar = (descripcion, completado = true) => {
    cagarDB();

    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);
    if (index != -1) {
        listado[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//función para listar tareas
const getListado = () => {
    cagarDB();
    return listado;
}

//función para borrar una tarea
const borrar = (descripcion) => {
    cagarDB();

    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);

    if (index != -1) {
        listado.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//Guarda en el archivo JSON
const guardarDB = () => {

    let data = JSON.stringify(listado);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar la tarea', err);
    });
}

const cagarDB = () => {
    try {
        listado = require('../db/data.json');
    } catch (error) {
        listado = []; //realizar un JSON valido
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}