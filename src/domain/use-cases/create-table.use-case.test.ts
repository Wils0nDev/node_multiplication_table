import { CreateTable } from './create-table.use-case';


describe('CreateTableUseCase', () => {
    test('should create table with default values', () => {
        const createTable = new CreateTable();
        //expeect : espera que
        //toBeInstanceOf : createTable debería ser una isntancia de CreateTable
        expect(createTable).toBeInstanceOf(CreateTable)
        const options = {base : 2}
        const  table = createTable.excute(options)
        const rows = table.split('\n').length

        //toContain : debería contener
        expect(table).toContain('2 x 1 = 2')
        expect(table).toContain('2 x 2 = 4')
        //toBe : las filas deberían ser 10
        expect(rows).toBe(10)
    });

    test('should create with custom values ', () => {
        const createTable = new CreateTable();
        const options = {base : 3,limit : 10}
        const  table = createTable.excute(options)
        const rows = table.split('\n').length

        expect(table).toContain('3 x 1 = 3')
        expect(table).toContain('3 x 5 = 15')
        expect(table).toContain('3 x 10 = 30')
        expect(rows).toBe(options.limit)
    });
});