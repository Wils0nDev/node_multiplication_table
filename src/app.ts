import { yarg } from "./config/plugins/yargs.adapter";
import { ServerApp } from "./presentation/server-app";
//variables de entorno
//console.log(process.env);
//variables argument values
//console.log(process.argv);
// const [tsnode,app, ...args] = process.argv;
// console.log(args)


//Funcion anonima autoinvocada asincrona
(async()=>{
     await main()
     console.log('hola')
   
})();

async function main(){
    const {b:base, l:limit, s:showTable,n:name, d:destination} = yarg
    ServerApp.run({base, limit, showTable, name, destination})
}
