import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

//yargs y opciones de yargs
export const yarg = yargs(process.argv)
.options('b',{
    alias: 'base',
    type: 'number',
    demandOption : true,
    describe: 'Multiplacation table base'
})
.options('l',{
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplacation table base'
})
.options('s',{
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table'
})
.options('n',{
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name'
})
.options('d',{
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'File destination'
})
.parseSync()

