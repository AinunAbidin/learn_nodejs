
const  tasks ={
    tasks :[{
        text : 'pasar grosir',
        completed : true
    },{
        text:'clean yard',
        completed: false
    },{
        text: 'film course',
        completed: false
    }],
    getTasks(){
        return this.tasks.filter((tasks)=>tasks.completed === false)
    }
}
console.log(tasks.getTasks())