// import { nombreCliente, ahorro, mostrarInformacion } from './cliente.js';
import * as clientes from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria,  mostrarInformacion, Empresa} from './empresa.js';

console.log(clientes);

console.log(clientes.nombreCliente);
console.log(clientes.ahorro);

const info = clientes.mostrarInformacion(clientes.nombreCliente, clientes.ahorro);
console.log(info);

// Utilizar la clase
let cliente = new clientes.Cliente(clientes.nombreCliente, clientes.ahorro);
console.log(cliente.mostrarInformacion());

console.log(mostrarInformacion(nombreEmpresa, ahorroEmpresa, categoria));

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());