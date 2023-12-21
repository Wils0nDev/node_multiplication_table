import { CreateTable } from './create-table.use-case';


describe('CreateTableUseCase', () => {
    test('should create table with default values', () => {
        const createTable = new CreateTable();

        const options = {
            base : 3,
            limit : 10
        }
        const  table = createTable.excute(options)
        const rows = table.split('\n').length
    });
});