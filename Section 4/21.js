///////////////////////
// fungsi arrow
// const square = function(x){
//     return x*x
// }

// const square = (x) =>{
//     return x*x
// }

// const square = (x) => x*x
// console.log(square(3))

const event = {
    name: 'hallo poople',
    anggota: ['sasa','risa','keenan'],
    printguestlist(){
        console.log('Guest list for '+this.name)
        this.anggota.forEach((anggota)=>{
            console.log(anggota + ' berbicara '+this.name)
        })
    }
}

event.printguestlist()