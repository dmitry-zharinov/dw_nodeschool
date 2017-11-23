//var total = 0;
//for(var i=2; i<process.argv.length;i++){
//    total += +process.argv[i];
//}
//console.log(total);

var result = process.argv.reduce(function(sum, current) {
  return sum + +current;
}, 2);

console.log(result);