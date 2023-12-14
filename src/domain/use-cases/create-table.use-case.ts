export interface CreateTableOptions {
    base : number;
    limit? : number;
}

export interface CreateTableUseCase {
    excute: (options : CreateTableOptions ) => string
}

export class CreateTable implements CreateTableUseCase{
    constructor() {
        /**
         * Un constructor nos permite hacer el DI(Inyeccion de Dependencias)
         */
    }


    excute({base,limit = 10} : CreateTableOptions) {
        let outputMessage : string = '';
        for (let i = 0; i <= limit ; i++) {
            outputMessage += `${base} X ${i} = ${base * i }\n`   
       }
       return outputMessage;
    }


   
}