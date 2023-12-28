import fs from 'fs'
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase',()=>{
    afterEach(()=>{
        const outputFolderExist = fs.existsSync('outputs')
        if(outputFolderExist) fs.rmSync('outputs',{ recursive:true});

        
    });
    test('should save file with default values',()=>{
        const saveFile = new SaveFile()

        const optinons = {
             fileContent : 'test content'
        }
        const result = saveFile.execute(optinons)
        //estas 2 son lo mismo
        expect(result).toBe(true)
        expect(result).toBeTruthy() //debería ser true

    });

    test('should save file with custom values', () => {

        const saveFile = new SaveFile()
        const options = {
            fileContent:'custom content',
            fileDestination : 'custom-outputs/file-destination',
            fileName : 'custom-table-name'
        }
        const filePath =`${options.fileDestination}/${options.fileName}.txt`;
        const result = saveFile.execute(options)
        const fileExist = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding : 'utf-8'})
        expect(result).toBe(true)
        expect(fileExist).toBe(true)
        expect(fileContent).toBe(options.fileContent)
    });
})