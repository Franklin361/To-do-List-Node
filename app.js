const argv = require('./config/yargs').argv;
const colors = require('colors')
const porhacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porhacer.getListado();
        for (let tarea of listado) {
            console.log('======== POR HACER ==========='.green);
            console.log(`${tarea.descripcion}`.magenta);
            console.log('Estado:' + `${tarea.completado}`.brightYellow);
            console.log('==================='.green);
        }
        break;
    case 'actualizar':
        let mensaje = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(mensaje);
        break;
    case 'borrar':
        let borrar = porhacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('El comando que ha ingresado no se reconoce');
        break;
}