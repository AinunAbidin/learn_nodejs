//contoh tutorila no9
//console.log('Hello world..');
//const fs = require('fs');
//fs adalah library filesystem di node js
//fs.writeFileSync('notes1.txt','ini ada file cobaan untuk belajar Node.js');
// fs.writeFileSync untuk emalkukan penulisan synchronous
//fs.appendFileSync('notes1.txt','katanya mereka cuma tau seidkit');
//melakukan penambahan data yang telah ada
////////////////////////////////////////////////////////////////////////////////////

//contoh tutorial no 10 
//
const add = require('./no10.js')
//1.melakukan pemanggilan data lain ke dalam variable
const sum = add(8, 2)
//2.melakukan pemanggilan fungsi dari file kita yang lain
console.log(sum)
//menampilkan variable
//////////////////////////////////////////////////////////////////////////////////

//contoh tutorial no 11