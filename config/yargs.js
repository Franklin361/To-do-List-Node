const descripcion = {
    alias: 'd',
    demand: true,
    desc: "Descripción de la tarea por hacer"
}

const completado = {
    alias: 'c',
    demand: true,
    desc: "Marca como completado o pendiente la tarea"
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}