//viet ham foreachnew giong foreach
let arr1 = [1,2,3,4,5,6,7,9];
Array.prototype.forEachNew = function forEachNew ( callback ) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//thuc thi ham forEachNew

let arr2 = [];

arr1.forEachNew((a, b) => {  
  arr2.push(b);
});

console.log(arr2) 
