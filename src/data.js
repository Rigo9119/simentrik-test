// Data
import conciliaciones from "./data/conciliaciones.json";
import fuentes from "./data/fuetnes.json";
import tableros from "./data/tableros.json";
import usuarios from "./data/usuarios.json";

const getData = (arr) => arr.map(item => item);

const consiliationArr = getData(conciliaciones);
const fuentesArr = getData(fuentes);
const tablerosArr = getData(tableros);
const usuariosArr = getData(usuarios);

export const bigData = [
    consiliationArr,
    fuentesArr,
    tablerosArr,
    usuariosArr
]

