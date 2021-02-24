var myTest = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q');

var randomItem = myTest[Math.floor(Math.random() * myTest.length)];

var randomItem = [];
for (let i=0; i<2; i++) {
    randomItem[i]=myTest[Math.floor(Math.random() * myTest.length)];
}
let box = document.getElementsByClassName("box1");
for (let i=0; i<2; i++) {
    box[i].innerHTML=randomItem[i]
}
console.log(box[0]);
