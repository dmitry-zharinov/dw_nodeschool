/* MY FIRST I/O! (Задача 3 из 13)  
  Реализуйте программу, которая синхронно читает файл и выводит количество,  
  строк (\n) содержащихся в файле, в консоль (stdout), точно так же, как это  
  сделала бы команда cat file | wc -l.  
   
  Полный путь до файла будет передан в качестве первого аргумента командной  
  строки. Вам не нужно создавать тестовый файл самостоятельно.  
*/  
//var fs = require("fs");
//var fileContent = fs.readFileSync(process.argv[2]).toString();
//var strArr = fileContent.split('\n');
//console.log(strArr.length - 1);
console.log(require("fs").readFileSync(process.argv[2]).toString().split('\n').length - 1);