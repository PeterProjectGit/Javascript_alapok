/////////////////////////////////////////66666 my thaughts getting 6, if sb kill me in my head
/* 
let let    
let a = 23;

let -> block scope-al rendelkezik
var -> function scope--
Állandó :
const ->block scope

elemi típusok:
string:
'', "", `string (template) literal ${változó}`
number: 3, 3.12 parseInt(), Number(), parseFloat() NaN egy number 'érték'
boolean
undefined
null -> vagy null a definiált értéke, vagy semmit adtak értéknek

Operátorok:
+ (túlterhelt), *, -, /, %(modulus), //nincs!! = értékadó
inkrementálás: ++
dekrementálás: --

Összehasonlító operátorok:
>,<, <=, >=, ==, === typeosszehasonlítógyerek,

logikai operátorok: negálás: !, and -> &&, or -> ||

3+"4" -> "34"
3*"4" -> 12

A Js gyengén típusos nyelv: ==

*/
console.log("Alma")

 
/* 
Array (tömb ) ~ Piton lista (dinamikus, heterogén)
const t = []; Ne: const t = new Array();
Elemek elérése: t[0], t.at(-1)
t.slice(start , end) end nélkül nem áll meg a tömb végén csak. (szeletelő) ~[::]
const newT = t.tospliced(start, deletecount, inserted elements)
i.indexOf(20) --> az elem indexét adja vissza
t.toString() --> '10, 20, 30'
t.join("    ") '102030'
*/

const pElements = document.querySelectorAll("p")
pElements[pElements.length-1].style.fontFamily = 'Arial'
pElements[pElements.length-1].style.color = "hsl(100, 60%, 40%)"

const floatDiv = document.querySelector('.float-div');
Array.from(pElements).splice(0, 3);
// Az Array.from() metódus tömböt készít a nodelist-ből. A nodelist nem tömb!


floatDiv.innerHTML = "";
console.log(Array.from(pElements));
for (let element of Array.from(pElements)){
    console.log(element.innerHTML)
    floatDiv.innerHTML += element.innerHTML;
}




