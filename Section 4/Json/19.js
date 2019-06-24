const fs = require('fs')
const chalk = require('chalk')

const getnote = ()=>{
    return ' inilah isi note kalian'
}
const addnote =(title,body)=>{
    const note = loadnote()
    const duplicatenote = note.filter((note)=>{
        return note.title === title
    })
    if (duplicatenote.length === 0 ){
        note.push({
            title: title,
            body: body
        })
        savenote(note)
        console.log("new note")
    }else{
        console.log("no note taken")
    }
}
const removenote =(title,body)=>{
    const note = loadnote()
    const simpannote = note.filter((note)=>{
        return note.title !== title
    })
    savenote(simpannote)
}
const savenote =(note)=>{
    const DataJson = JSON.stringify(note)
    fs.writeFileSync('19.json',DataJson)
}
const loadnote = ()=>{
    try {
        const load = fs.readFileSync('./19.json')
        return JSON.parse(load)
    } catch (error) {
        return []
    }
}
const listennote =()=>{
    const note = loadnote()
    console.log(chalk.inverse("yorr notess..."))
    note.forEach((note) => {
        console.log(note.title)
    });
}
const readnote=(title)=>{
    const note = loadnote()
    const notes = note.find((note) => note.title === title)
    if (notes){
        console.log(notes.title)
        console.log(notes.body)
    }else{
        console.log('data kosong')
    }
}
module.exports ={
    getnote : getnote,
    addnote : addnote,
    removenote : removenote,
    listennote : listennote,
    readnote : readnote
}