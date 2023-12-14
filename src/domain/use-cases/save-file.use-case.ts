const fs = require("fs");

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}
export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {
    /** repository : StorageRepository */
  }
  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      console.log("Archivo creado!");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}