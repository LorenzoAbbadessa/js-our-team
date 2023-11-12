/*let team = {
    "name": ["Wayne Barnett","Angela Caroll", "Walter Gordon", "Angela Lopez", 
            "Scott Estrada","Barbara Ramos"],
   "role": ["Founder & CEO", " CHief Editor", "Office Manager", "Social Media Manager",
            "Deveolper", "Graphic Designer"],
    "img":["wayne-barnett-founder-ceo.jpg","angela-caroll-chief-editor.jpg", 
         "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg",
         "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"],
};

console.log(team["img")*/

/*let team = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = team;
 
function myFunction(item, index) {
  team += index + ": " + item + "<br>"; 
}*/

/*let Wayne = {
    "name": "Wayne Barnett",
    "role": "Founder & CEO",
    "img": "wayne-barnett-founder-ceo.jpg",
};
let AngelaC= {
    "name": "Angela Caroll",
    "role" :"Chief Editor",
    "img" :"angela-caroll-chief-editor.jpg",
};
let Walter = {
    "name": "Walter Gordon",
    "role": "Office Manager",
    "img": "walter-gordon-office-manager.jpg",
};
let AngelaL = {
    "name": "Angela Lopez",
    "role": "Social Media Manager",
    "img" :"angela-lopez-social-media-manager.jpg"
};
let Scott = {
    "name" :"Scott Estrada",
    "role" :"Developer",
    "img":"scott-estrada-developer.jpg",
};
let Barbara = {
    "name" :"Barbara Ramos",
    "role": "Graphic Designer",
    "img": "barbara-ramos-graphic-designer.jpg"
};

for (let teamMate in Wayne){
    console.log(Wayne[teamMate])
};
for (let teamMate in AngelaC){
    console.log(AngelaC[teamMate])
};
for (let teamMate in Walter){
    console.log(Walter[teamMate])
};
for (let teamMate in AngelaL){
    console.log(AngelaL[teamMate])
};
for (let teamMate in Wayne){
    console.log(Wayne[teamMate])
};for (let teamMate in Scott){
    console.log(Scott[teamMate])
};
for (let teamMate in Barbara){
    console.log(Barbara[teamMate])
};*/

let teamMate = [
    {
        name: "Wayne Barnet",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role :"Chief Editor",
        img :"angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img :"angela-lopez-social-media-manager.jpg"
    },
    {
        name :"Scott Estrada",
        role :"Developer",
        img:"scott-estrada-developer.jpg",
    },
    {
        name :"Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }

]
teamMate.forEach(team => {
    for (let value in team) {
        //console.log(`${team[value]}`)
        document.getElementById("testo").innerHTML = (`${team[value]}`)
    }
});





