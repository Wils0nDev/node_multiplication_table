//Esto mantendra extructurado la logíca del servidor
//Este orquestara como funcionara nuestra aplicación de entrada

import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOption {
    base : number;
    limit : number;
    showTable : boolean;
    name : string
   destination : string
}
export class ServerApp {

    static run({base,limit,showTable,name,destination} : RunOption){
    console.log('Server running...')
    const table = new CreateTable().excute({base,limit})
    const wasCreated = new SaveFile().execute({fileContent: table, fileDestination: `${destination}`, fileName: name})

    if(showTable) console.log(table);
      (wasCreated) ? console.log('File created') :  console.log('File not created')
    }


}