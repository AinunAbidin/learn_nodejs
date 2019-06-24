// const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./Json/19.js')
// console.log(chalk.blue.inverse.bold('water'))

// section 4 no 15
// const command = process.argv[2]
// console.log(process.argv)
// if (command === 'add'){
//     console.log('Halooo people')
// }else if (command === 'remove'){
//     console.log('kunaoon jangg....')
// }
///////////////////////////////////////////////////////////////

//section  4 no 16 yargs
// create add command
yargs.command({
    command : 'add',
    describe : 'adding a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body :{
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addnote(argv.title,argv.body)
    }
})
// create remove command
yargs.command({
    command : 'remove',
    describe : 'remove a note',
    handler (argv) {
        notes.removenote(argv.title,argv.body)
    }
})
// create read comand
yargs.command({
    command : 'read',
    describe : 'read a note',
    handler(argv){
        notes.readnote(argv.title)
    }
})
// create listen command
yargs.command({
    command : 'listen',
    describe : 'listen note',
    handler(){
        notes.listennote()
    }
})
yargs.parse()
console.log(process.argv)
console.log(yargs.argv)
//////////////////////////////////////////////////

//
// no 18 add di folder json

