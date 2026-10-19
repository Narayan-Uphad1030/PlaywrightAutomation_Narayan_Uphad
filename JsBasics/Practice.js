/*let i = 1;
while(i<=3){

    console.log(i);
    i++;

}*/

for(let i=1;i<=5;i++)
{
if(i==3)
break;

console.log(i);
}

var x = 10;

function test() {
var x = 20;
console.log(x);
}

test();


let y = 10;
{
let y = 30;
console.log(y);

}


console.log("5"*2);
console.log("Hello"*2);


let num = 0;
if(num){

    console.log(true);
}else{
    console.log(false);
}

console.log(typeof(null));
console.log(NaN==NaN);

console.log(1<2<3);

console.log(typeof NaN);

console.log(Boolean("false"));

console.log("5"+ +"5");

console.log(5+"5"-5);

let b = 10;
function test(){
    console.log(b);
    var b = 20;
}
test();

if(x=10){
    console.log("Hello");
}