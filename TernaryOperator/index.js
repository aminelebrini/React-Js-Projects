const name = "Rachid";
const gender = "Male";
const age = 20;
//gender === "Femal" ? document.getElementById('demo').innerText = "Mrs" : document.getElementById('demo').innerText = "Mr";//
//age === 20 ? document.getElementById('age').innerText = "You are a child" : document.getElementById('age').innerText = "You are young";
//or://

let result = gender === "Femal" ? "Mrs" : "Mr";
let agee = age < 18 ? "You are a child" : "You are young";
document.getElementById('demo').innerText= result;
document.getElementById('age').innerText = agee;

//or://
document.getElementById('demo').innerText = `Hi ${name} your gender is : ${result} and you are a ${agee}`;
document.getElementById('demo').innerText = `Hi ${name} your gender is : ${result}`;
