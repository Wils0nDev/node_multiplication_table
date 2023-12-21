const fs = require('fs');
import { yarg } from "./config/plugins/yargs.adapter";

const {b:base, l:limit, s:showTable} = yarg

let outputMessage = '';
//const base = 5
const headerMessage : string = `
=======================
        Tabla del ${base}
=======================
`
for (let i = 0; i <= limit ; i++) {
     outputMessage += `${base} X ${i} = ${base * i }\n`   
}
outputMessage = headerMessage + outputMessage
const outputPath = `outputs/`
//mkdirSync : crea mi directorio si en caso no esta creada
fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`${outputPath}tabla-${base}.txt`,outputMessage)
console.log('Archivo creado!')
if(showTable){
  console.log(outputMessage)
}
