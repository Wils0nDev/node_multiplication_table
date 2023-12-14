"use strict";
const fs = require('fs');
let outputMessage = '';
const base = 5;
const headerMessage = `
=======================
        Tabla del ${base}
=======================
`;
for (let i = 0; i <= 12; i++) {
    outputMessage += `${base} X ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;
const outputPath = `outputs/`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}tabla-${base}.txt`, outputMessage);
console.log(outputMessage);
