const students = [
    {id: 21, name:"riyadh"},
    {id:31, name: "shanto"},
    {id:35, name : "tayef"}, 
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id > 25);
const biggerOne = students.find(s => s.id > 30);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);