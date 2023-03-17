function product(...values){
  var resp = 1
  for(let value of values){
    resp *= value
  };
  return resp
}

function sumOdds(...values){
  resp = 0
  for (let value of values){
    if (value % 2 == 1){
      resp += value
    }
  }
  return resp
}

function sum(...values){
  var resp = 0
  for(let value of values){
    resp += value
  };
  return resp
}

console.log(sum(1, 2, 3));
console.log(sum(2,2,2));
console.log(sum(1,2,3,4,5,6));
console.log(sumOdds(1, 2, 3));
console.log(sumOdds(2,2,2));
console.log(sumOdds(1,2,3,4,5,6));
console.log(product(1, 2, 3));
console.log(product(2,2,2));
console.log(product(1,2,3,4,5,6));