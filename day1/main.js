var x = 13;
var y = 5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x++) // log x ra roi moi + nen khi log ra van la 13
console.log(x--); // log x = 14 do da tang gia tri o tren
console.log(x+=2); // log x = 15(13+2) do khi --x o tren bang 13 
console.log(x-=2); // log x = 13
let a = 7;
console.log(typeof(a));
let b = 8;
console.log(typeof(b));
const c = 10;
const d = 11;
console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);
console.log(c % d);
let z = true
console.log(typeof(z));
console.log(z)
let e = null
console.log(typeof(e));
console.log(e)
let f; // undefine
console.log(f);
let name = "le van nhat"
console.log(`Hello, my name is ${name}`);
// Symbol
const g = Symbol('name');
const h = Symbol('name');
console.log(g === h); // false
console.log(typeof(g)); //Mỗi Symbol là duy nhất
console.log(g);
// so sánh let, const, var
/*
    var được được sử dụng trong javascript cũ, có phạm vi rộng
    let, const chỉ tồn tại trong block đó (không tồn tại trong function)
    const không thể thay đổi giá trị sau khi khai báo còn let thì có thể thay đổi sau khi gán

*/
